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

[misskey.d.ts:427](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L427)

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

[misskey.d.ts:433](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L433)

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

[misskey.d.ts:391](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L391)

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

[misskey.d.ts:451](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L451)

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

[misskey.d.ts:403](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L403)

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

[misskey.d.ts:421](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L421)

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

[misskey.d.ts:463](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L463)

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

[misskey.d.ts:457](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L457)

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

[misskey.d.ts:445](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L445)

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

[misskey.d.ts:439](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L439)

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

[misskey.d.ts:397](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L397)

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

[misskey.d.ts:415](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L415)

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

[misskey.d.ts:409](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L409)
