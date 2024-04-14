import { Application } from "typedoc";
import { MarkdownPageEvent } from "typedoc-plugin-markdown";

const replaceList: { pat: RegExp; rep: string }[] = [
    {
        pat: /(?<!\\)<(?!br)/g,
        rep: "\\<",
    },
];

export function load(app: Application) {
	app.renderer.on(MarkdownPageEvent.END, (page: MarkdownPageEvent) => {
		// Header Escape Remove
		const contentSplit = page.contents?.split('\n');
		if (contentSplit) {
			let codeFrag = false;
			let headerFrag = true;
			for (let i = 0; i < contentSplit.length; i++) {
				const t = contentSplit[i];
				//ヘッダー用のエスケープ処理
				if (headerFrag && /^# /.test(t)) {
					headerFrag = false;
					contentSplit[i] = contentSplit[i].replaceAll('\\', '').replaceAll('<', '{"<"}');
					continue;
				}
				if (/```/.test(t)) {
					codeFrag = !codeFrag;
					continue;
				}
				if (codeFrag) {
					// コードブロック内なら、エスケープを消す
					contentSplit[i] = contentSplit[i].replaceAll(
						'\\<',
						'<'
					);

					continue;
				}
				for (const repD of replaceList) {
					contentSplit[i] = contentSplit[i].replaceAll(
						repD.pat,
						repD.rep
					);
				}
			}

			page.contents = contentSplit.join('\n');
		}
	});
}
