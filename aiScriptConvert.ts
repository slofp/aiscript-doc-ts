import { Application, Comment, CommentDisplayPart, ContainerReflection, DeclarationReflection, ReflectionKind } from "typedoc";
import { MarkdownPageEvent } from "typedoc-plugin-markdown";
import * as fs from "fs/promises";
import config from './typedoc.json';

const aiScriptNameSpace = '@aiNamespace';
const aiScriptPrimitiveProp = '@aiPrimitive';

const categoryLabel = [
	['functions', '関数'],
	['namespaces', '名前空間'],
	['primitive-props', 'プリミティブプロパティ'],
	['interfaces', 'インターフェース'],
	['type-aliases', '定数タイプ'],
	['variables', '定数']
];
const categoryName = '_category_.json';

function existsTag(comment: Comment): boolean {
	return comment.hasModifier(aiScriptNameSpace);
}

function existsTagFromRef(ref: ContainerReflection): string | undefined {
	if (ref.comment) {
		if (existsTag(ref.comment)) {
			return ref.name;
		}
	}

	return existsTagFromRefs(ref.children);
}

function existsTagFromRefs(refs?: ContainerReflection[]): string | undefined {
	if (!refs) {
		return undefined;
	}

	for (const ref of refs) {
		const n = existsTagFromRef(ref);
		if (n) {
			return n;
		}
	}

	return undefined;
}

function getRefName(val: ReflectionKind) {
	return ReflectionKind[val];
}

const replacedUrl: [string, string][] = [
	['std/interfaces/Error.md', 'std/primitive-props/Error.md']
];

function changeFolderPath(page: MarkdownPageEvent, name: string) {
	const oldUrl = page.url;
	const newUrlSplit = oldUrl.split("\\"); // もしかしたらunix系は通らないかもしれない
	newUrlSplit[1] = name;
	page.url = newUrlSplit.join("\\");
	page.model.url = page.url;
	page.filename = page.filename.replace(oldUrl, page.url);

	replacedUrl.push([oldUrl.split('\\').toSpliced(0, 1).join('/'), page.url.split('\\').toSpliced(0, 1).join('/')]);
}

function setFront(page: MarkdownPageEvent) {
	page.frontmatter = {
		title: page.model.name,
		...page.frontmatter
	};
}

export function load(app: Application) {
	app.renderer.on(MarkdownPageEvent.BEGIN, (page: MarkdownPageEvent) => {
		//console.log(page.project);
		const cm = page.model.comment;
		if (!cm) {
			setFront(page);
			return;
		}
		if (cm.hasModifier(aiScriptNameSpace)) {
			page.model.kind = ReflectionKind.Namespace;
			changeFolderPath(page, 'namespaces');

			// errorのだけ変更が必要
			if (page.model.name === 'ErrorConstructor') {
				page.model.name = 'Error';
			}
			else if (page.model.name === 'Component') {
				page.model.name = 'Ui:C';
			}
		}
		else {
			const primName = cm.getTag(aiScriptPrimitiveProp)?.content[0].text.trim();
			if (primName) {
				page.model.name = primName;
				page.model.kind = ReflectionKind.Class;
				changeFolderPath(page, 'primitive-props');
				cm.removeTags(aiScriptPrimitiveProp);
			}
		}
		setFront(page);
	});

	// 状況によっては出来ない
	app.renderer.on(MarkdownPageEvent.END, (page: MarkdownPageEvent) => {
		// どれくらいあるかわからないので数秒遅らせる
		//await new Promise(r => setTimeout(r, 3000));
		console.log(replacedUrl.length);
		for (const [b, a] of replacedUrl) {
			page.contents = page.contents?.replaceAll(b, a);
		}
	});

	// カテゴリー生成
	app.renderer.postRenderAsyncJobs.push(async (event) => {
		const docPath = config.out;
		const dirPath = (await fs.readdir(docPath, { recursive: true })).map(v => docPath + '/' + v);
		const dir = (await Promise.all(dirPath.map(v => fs.stat(v).then(vs => [vs.isDirectory(), v] as [boolean, string])))).filter(v => v[0]).map(v => v[1].replaceAll('\\', '/'));

		for (const dirPath of dir) {
			let label: string | undefined;
			for (const [category, label_] of categoryLabel) {
				if (dirPath.includes(category)) {
					label = label_;
				}
			}
			if (!label) {
				const l = dirPath.split('/');
				const rawLabel = l[l.length - 1].toLowerCase();
				label = rawLabel[0].toUpperCase() + rawLabel.slice(1);
			}
			const categoryPath = dirPath + "/" + categoryName;
			const data = {
				label,
				link: {
					type: "generated-index"
				},
			};
			await fs.writeFile(categoryPath, JSON.stringify(data, null, 2), { encoding: 'utf8' });
		}

		const removeFiles = dirPath.filter(v => v.includes('modules') || v.includes('README'));
		for (const path of removeFiles) {
			await fs.unlink(path);
		}
	});

	app.renderer.preRenderAsyncJobs.push(async (event) => {
		if (!event.urls) {
			return;
		}
		for (const url of event.urls) {
			//console.log(replacedUrl.length);
			//console.log(url.model.url);
		}
	});
}
