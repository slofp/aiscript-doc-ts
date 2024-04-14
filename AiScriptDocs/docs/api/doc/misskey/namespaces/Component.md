---
title: Component
---

# Component

MisskeyUIコンポーネントライブラリ
`Ui:C:`からアクセス可能です。

## Remarks

このライブラリはプラグインでは使用できません。

## 関数

### button()

```ts
button(options, id?): IUiComponent<object, str>
```

ボタンコンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | `object` | パラメーター |
| `options.disabled`? | `bool` | - |
| `options.onClick`? | () => `void` | - |
| `options.primary`? | `bool` | - |
| `options.rounded`? | `bool` | - |
| `options.text`? | `str` | - |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<`object`, `str`\>

> ##### disabled?
>
> ```ts
> optional disabled: bool;
> ```
>
> ##### onClick()?
>
> ```ts
> optional onClick: () => void;
> ```
>
> ###### 返り値
>
> `void`
>
> ##### primary?
>
> ```ts
> optional primary: bool;
> ```
>
> ##### rounded?
>
> ```ts
> optional rounded: bool;
> ```
>
> ##### text?
>
> ```ts
> optional text: str;
> ```
>

#### Source

[misskey.d.ts:333](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/misskey.d.ts#L333)

***

### buttons()

```ts
buttons(options, id?): IUiComponent<object, str>
```

複数ボタンコンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | `object` | パラメーター |
| `options.buttons`? | `arr`\<`object`\> | - |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<`object`, `str`\>

> ##### buttons?
>
> ```ts
> optional buttons: arr<object>;
> ```
>
> ###### Type declaration
>
> ###### disabled?
>
> ```ts
> optional disabled: bool;
> ```
>
> ###### onClick()?
>
> ```ts
> optional onClick: () => void;
> ```
>
> ###### 返り値
>
> `void`
>
> ###### primary?
>
> ```ts
> optional primary: bool;
> ```
>
> ###### rounded?
>
> ```ts
> optional rounded: bool;
> ```
>
> ###### text?
>
> ```ts
> optional text: str;
> ```
>

#### Source

[misskey.d.ts:345](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/misskey.d.ts#L345)

***

### container()

```ts
container(options, id?): IUiComponent<object, str>
```

コンテナコンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | `object` | パラメーター |
| `options.align`? | `"left"` \| `"center"` \| `"right"` | - |
| `options.bgColor`? | `str` | - |
| `options.borderColor`? | `str` | - |
| `options.borderWidth`? | `num` | - |
| `options.children`? | `arr`\<[`IUiComponent`](../interfaces/IUiComponent.md)\<`obj`, `str`\>\> | - |
| `options.fgColor`? | `str` | - |
| `options.font`? | [`FontType`](../type-aliases/FontType.md) | - |
| `options.hidden`? | `bool` | - |
| `options.padding`? | `num` | - |
| `options.rounded`? | `bool` | - |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<`object`, `str`\>

> ##### align?
>
> ```ts
> optional align: "left" | "center" | "right";
> ```
>
> ##### bgColor?
>
> ```ts
> optional bgColor: str;
> ```
>
> ##### borderColor?
>
> ```ts
> optional borderColor: str;
> ```
>
> ##### borderWidth?
>
> ```ts
> optional borderWidth: num;
> ```
>
> ##### children?
>
> ```ts
> optional children: arr<IUiComponent<obj, str>>;
> ```
>
> ##### fgColor?
>
> ```ts
> optional fgColor: str;
> ```
>
> ##### font?
>
> ```ts
> optional font: FontType;
> ```
>
> ##### hidden?
>
> ```ts
> optional hidden: bool;
> ```
>
> ##### padding?
>
> ```ts
> optional padding: num;
> ```
>
> ##### rounded?
>
> ```ts
> optional rounded: bool;
> ```
>

#### Source

[misskey.d.ts:258](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/misskey.d.ts#L258)

***

### folder()

```ts
folder(options, id?): IUiComponent<object, str>
```

フォルダーコンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | `object` | パラメーター |
| `options.children`? | [`IUiComponent`](../interfaces/IUiComponent.md)\<`obj`, `str`\> | - |
| `options.opened`? | `bool` | - |
| `options.title`? | `str` | - |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<`object`, `str`\>

> ##### children?
>
> ```ts
> optional children: IUiComponent<obj, str>;
> ```
>
> ##### opened?
>
> ```ts
> optional opened: bool;
> ```
>
> ##### title?
>
> ```ts
> optional title: str;
> ```
>

#### Source

[misskey.d.ts:376](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/misskey.d.ts#L376)

***

### mfm()

```ts
mfm(options, id?): IUiComponent<object, str>
```

MFMテキストコンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | `object` | パラメーター |
| `options.bold`? | `bool` | - |
| `options.color`? | `str` | - |
| `options.font`? | [`FontType`](../type-aliases/FontType.md) | - |
| `options.onClickEv`? | (`evName`) => `void` | - |
| `options.size`? | `num` | - |
| `options.text`? | `str` | - |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<`object`, `str`\>

> ##### bold?
>
> ```ts
> optional bold: bool;
> ```
>
> ##### color?
>
> ```ts
> optional color: str;
> ```
>
> ##### font?
>
> ```ts
> optional font: FontType;
> ```
>
> ##### onClickEv()?
>
> ```ts
> optional onClickEv: (evName) => void;
> ```
>
> ###### パラメーター
>
> | 引数 | 型 |
> | :------ | :------ |
> | `evName` | `str` |
>
> ###### 返り値
>
> `void`
>
> ##### size?
>
> ```ts
> optional size: num;
> ```
>
> ##### text?
>
> ```ts
> optional text: str;
> ```
>

#### Source

[misskey.d.ts:287](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/misskey.d.ts#L287)

***

### numberInput()

```ts
numberInput(options, id?): IUiComponent<object, str>
```

数値入力コンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | `object` | パラメーター |
| `options.caption`? | `str` | - |
| `options.default`? | `num` | - |
| `options.label`? | `str` | - |
| `options.onInput`? | (`value`) => `void` | - |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<`object`, `str`\>

> ##### caption?
>
> ```ts
> optional caption: str;
> ```
>
> ##### default?
>
> ```ts
> optional default: num;
> ```
>
> ##### label?
>
> ```ts
> optional label: str;
> ```
>
> ##### onInput()?
>
> ```ts
> optional onInput: (value) => void;
> ```
>
> ###### パラメーター
>
> | 引数 | 型 |
> | :------ | :------ |
> | `value` | `num` |
>
> ###### 返り値
>
> `void`
>

#### Source

[misskey.d.ts:322](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/misskey.d.ts#L322)

***

### postForm()

```ts
postForm(options, id?): IUiComponent<object, str>
```

投稿フォーム(そのもの)コンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | `object` | パラメーター |
| `options.form`? | `object` | - |
| `options.form.text`? | `str` | - |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<`object`, `str`\>

> ##### form?
>
> ```ts
> optional form: object;
> ```
>
> ##### form.text
>
> ```ts
> text: str;
> ```
>

#### Source

[misskey.d.ts:397](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/misskey.d.ts#L397)

***

### postFormButton()

```ts
postFormButton(options, id?): IUiComponent<object, str>
```

投稿フォーム表示ボタンコンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | `object` | パラメーター |
| `options.form`? | `object` | - |
| `options.form.text`? | `str` | - |
| `options.primary`? | `bool` | - |
| `options.rounded`? | `bool` | - |
| `options.text`? | `str` | - |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<`object`, `str`\>

> ##### form?
>
> ```ts
> optional form: object;
> ```
>
> ##### form.text
>
> ```ts
> text: str;
> ```
>
> ##### primary?
>
> ```ts
> optional primary: bool;
> ```
>
> ##### rounded?
>
> ```ts
> optional rounded: bool;
> ```
>
> ##### text?
>
> ```ts
> optional text: str;
> ```
>

#### Source

[misskey.d.ts:386](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/misskey.d.ts#L386)

***

### select()

```ts
select(options, id?): IUiComponent<object, str>
```

プルダウンコンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | `object` | パラメーター |
| `options.caption`? | `str` | - |
| `options.default`? | `str` | - |
| `options.items`? | `arr`\<`object`\> | - |
| `options.label`? | `str` | - |
| `options.onChange`? | (`value`) => `void` | - |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<`object`, `str`\>

> ##### caption?
>
> ```ts
> optional caption: str;
> ```
>
> ##### default?
>
> ```ts
> optional default: str;
> ```
>
> ##### items?
>
> ```ts
> optional items: arr<object>;
> ```
>
> ###### Type declaration
>
> ###### text
>
> ```ts
> text: str;
> ```
>
> ###### value
>
> ```ts
> value: str;
> ```
>
> ##### label?
>
> ```ts
> optional label: str;
> ```
>
> ##### onChange()?
>
> ```ts
> optional onChange: (value) => void;
> ```
>
> ###### パラメーター
>
> | 引数 | 型 |
> | :------ | :------ |
> | `value` | `str` |
>
> ###### 返り値
>
> `void`
>

#### Source

[misskey.d.ts:364](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/misskey.d.ts#L364)

***

### switch()

```ts
switch(options, id?): IUiComponent<object, str>
```

スイッチコンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | `object` | パラメーター |
| `options.caption`? | `str` | - |
| `options.default`? | `bool` | - |
| `options.label`? | `str` | - |
| `options.onChange`? | (`value`) => `void` | - |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<`object`, `str`\>

> ##### caption?
>
> ```ts
> optional caption: str;
> ```
>
> ##### default?
>
> ```ts
> optional default: bool;
> ```
>
> ##### label?
>
> ```ts
> optional label: str;
> ```
>
> ##### onChange()?
>
> ```ts
> optional onChange: (value) => void;
> ```
>
> ###### パラメーター
>
> | 引数 | 型 |
> | :------ | :------ |
> | `value` | `bool` |
>
> ###### 返り値
>
> `void`
>

#### Source

[misskey.d.ts:353](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/misskey.d.ts#L353)

***

### text()

```ts
text(options, id?): IUiComponent<object, str>
```

標準テキストコンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | `object` | パラメーター |
| `options.bold`? | `bool` | - |
| `options.color`? | `str` | - |
| `options.font`? | [`FontType`](../type-aliases/FontType.md) | - |
| `options.size`? | `num` | - |
| `options.text`? | `str` | - |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<`object`, `str`\>

> ##### bold?
>
> ```ts
> optional bold: bool;
> ```
>
> ##### color?
>
> ```ts
> optional color: str;
> ```
>
> ##### font?
>
> ```ts
> optional font: FontType;
> ```
>
> ##### size?
>
> ```ts
> optional size: num;
> ```
>
> ##### text?
>
> ```ts
> optional text: str;
> ```
>

#### Source

[misskey.d.ts:275](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/misskey.d.ts#L275)

***

### textInput()

```ts
textInput(options, id?): IUiComponent<object, str>
```

1行テキスト入力コンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | `object` | パラメーター |
| `options.caption`? | `str` | - |
| `options.default`? | `str` | - |
| `options.label`? | `str` | - |
| `options.onInput`? | (`value`) => `void` | - |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<`object`, `str`\>

> ##### caption?
>
> ```ts
> optional caption: str;
> ```
>
> ##### default?
>
> ```ts
> optional default: str;
> ```
>
> ##### label?
>
> ```ts
> optional label: str;
> ```
>
> ##### onInput()?
>
> ```ts
> optional onInput: (value) => void;
> ```
>
> ###### パラメーター
>
> | 引数 | 型 |
> | :------ | :------ |
> | `value` | `str` |
>
> ###### 返り値
>
> `void`
>

#### Source

[misskey.d.ts:311](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/misskey.d.ts#L311)

***

### textarea()

```ts
textarea(options, id?): IUiComponent<object, str>
```

複数行テキスト入力コンポーネント

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | `object` | パラメーター |
| `options.caption`? | `str` | - |
| `options.default`? | `str` | - |
| `options.label`? | `str` | - |
| `options.onInput`? | (`value`) => `void` | - |
| `id`? | `str` | コンポーネントID(必要であれば) |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<`object`, `str`\>

> ##### caption?
>
> ```ts
> optional caption: str;
> ```
>
> ##### default?
>
> ```ts
> optional default: str;
> ```
>
> ##### label?
>
> ```ts
> optional label: str;
> ```
>
> ##### onInput()?
>
> ```ts
> optional onInput: (value) => void;
> ```
>
> ###### パラメーター
>
> | 引数 | 型 |
> | :------ | :------ |
> | `value` | `str` |
>
> ###### 返り値
>
> `void`
>

#### Source

[misskey.d.ts:300](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/misskey.d.ts#L300)
