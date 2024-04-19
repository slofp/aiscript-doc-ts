---
title: Ui:C
---

# Ui:C

MisskeyUIコンポーネントライブラリ\
`Ui:C:`からアクセス可能です。

## Remarks

このライブラリはプラグインでは使用できません。

## 関数

### button()

```ts
button(options, id?): IUiComponent<ButtonComponentOption, str>
```

ボタンコンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | [`ButtonComponentOption`](../interfaces/ButtonComponentOption.md) | パラメーター |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<[`ButtonComponentOption`](../interfaces/ButtonComponentOption.md), `str`\>

#### Source

[misskey.d.ts:431](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L431)

***

### buttons()

```ts
buttons(options, id?): IUiComponent<ButtonsComponentOption, str>
```

複数ボタンコンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | [`ButtonsComponentOption`](../interfaces/ButtonsComponentOption.md) | パラメーター |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<[`ButtonsComponentOption`](../interfaces/ButtonsComponentOption.md), `str`\>

#### Source

[misskey.d.ts:437](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L437)

***

### container()

```ts
container(options, id?): IUiComponent<ContainerComponentOption, str>
```

コンテナコンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | [`ContainerComponentOption`](../interfaces/ContainerComponentOption.md) | パラメーター |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<[`ContainerComponentOption`](../interfaces/ContainerComponentOption.md), `str`\>

#### Source

[misskey.d.ts:395](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L395)

***

### folder()

```ts
folder(options, id?): IUiComponent<FolderComponentOption, str>
```

フォルダーコンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | [`FolderComponentOption`](../interfaces/FolderComponentOption.md) | パラメーター |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<[`FolderComponentOption`](../interfaces/FolderComponentOption.md), `str`\>

#### Source

[misskey.d.ts:455](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L455)

***

### mfm()

```ts
mfm(options, id?): IUiComponent<MfmComponentOption, str>
```

MFMテキストコンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | [`MfmComponentOption`](../interfaces/MfmComponentOption.md) | パラメーター |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<[`MfmComponentOption`](../interfaces/MfmComponentOption.md), `str`\>

#### Source

[misskey.d.ts:407](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L407)

***

### numberInput()

```ts
numberInput(options, id?): IUiComponent<NumberInputComponentOption, str>
```

数値入力コンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | [`NumberInputComponentOption`](../interfaces/NumberInputComponentOption.md) | パラメーター |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<[`NumberInputComponentOption`](../interfaces/NumberInputComponentOption.md), `str`\>

#### Source

[misskey.d.ts:425](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L425)

***

### postForm()

```ts
postForm(options, id?): IUiComponent<PostFormComponentOption, str>
```

投稿フォーム(そのもの)コンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | [`PostFormComponentOption`](../interfaces/PostFormComponentOption.md) | パラメーター |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<[`PostFormComponentOption`](../interfaces/PostFormComponentOption.md), `str`\>

#### Source

[misskey.d.ts:467](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L467)

***

### postFormButton()

```ts
postFormButton(options, id?): IUiComponent<PostFormButtonComponentOption, str>
```

投稿フォーム表示ボタンコンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | [`PostFormButtonComponentOption`](../interfaces/PostFormButtonComponentOption.md) | パラメーター |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<[`PostFormButtonComponentOption`](../interfaces/PostFormButtonComponentOption.md), `str`\>

#### Source

[misskey.d.ts:461](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L461)

***

### select()

```ts
select(options, id?): IUiComponent<SelectComponentOption, str>
```

プルダウンコンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | [`SelectComponentOption`](../interfaces/SelectComponentOption.md) | パラメーター |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<[`SelectComponentOption`](../interfaces/SelectComponentOption.md), `str`\>

#### Source

[misskey.d.ts:449](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L449)

***

### switch()

```ts
switch(options, id?): IUiComponent<SwitchComponentOption, str>
```

スイッチコンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | [`SwitchComponentOption`](../interfaces/SwitchComponentOption.md) | パラメーター |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<[`SwitchComponentOption`](../interfaces/SwitchComponentOption.md), `str`\>

#### Source

[misskey.d.ts:443](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L443)

***

### text()

```ts
text(options, id?): IUiComponent<TextComponentOption, str>
```

標準テキストコンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | [`TextComponentOption`](../interfaces/TextComponentOption.md) | パラメーター |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<[`TextComponentOption`](../interfaces/TextComponentOption.md), `str`\>

#### Source

[misskey.d.ts:401](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L401)

***

### textInput()

```ts
textInput(options, id?): IUiComponent<TextInputComponentOption, str>
```

1行テキスト入力コンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | [`TextInputComponentOption`](../interfaces/TextInputComponentOption.md) | パラメーター |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<[`TextInputComponentOption`](../interfaces/TextInputComponentOption.md), `str`\>

#### Source

[misskey.d.ts:419](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L419)

***

### textarea()

```ts
textarea(options, id?): IUiComponent<TextareaComponentOption, str>
```

複数行テキスト入力コンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | [`TextareaComponentOption`](../interfaces/TextareaComponentOption.md) | パラメーター |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<[`TextareaComponentOption`](../interfaces/TextareaComponentOption.md), `str`\>

#### Source

[misskey.d.ts:413](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L413)
