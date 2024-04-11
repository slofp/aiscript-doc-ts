---
---
**AiScript Api Docs** • [Readme](../../README.md) \| [API](../../modules.md)

***

[AiScript Api Docs](../../README.md) / [misskey](../README.md) / Component

# Interface: Component

## Methods

### button()

> **button**(`options`, `id`?): [`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

ボタンコンポーネント

#### Parameters

• **options**

パラメーター

• **options\.disabled?**: `boolean`

• **options\.onClick?**

• **options\.primary?**: `boolean`

• **options\.rounded?**: `boolean`

• **options\.text?**: `string`

• **id?**: `string`

コンポーネントID(必要であれば)

#### Returns

[`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

> ##### disabled?
>
> > **`optional`** **disabled**: `boolean`
>
> ##### onClick()?
>
> > **`optional`** **onClick**: () => `void`
>
> ###### Returns
>
> `void`
>
> ##### primary?
>
> > **`optional`** **primary**: `boolean`
>
> ##### rounded?
>
> > **`optional`** **rounded**: `boolean`
>
> ##### text?
>
> > **`optional`** **text**: `string`
>

#### Source

[misskey.d.ts:299](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L299)

***

### buttons()

> **buttons**(`options`, `id`?): [`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

複数ボタンコンポーネント

#### Parameters

• **options**

パラメーター

• **options\.buttons?**: [`arr`](../../std/type-aliases/arr.md)\<`object`\>

• **id?**: `string`

コンポーネントID(必要であれば)

#### Returns

[`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

> ##### buttons?
>
> > **`optional`** **buttons**: [`arr`](../../std/type-aliases/arr.md)\<`object`\>
>
> ###### Type declaration
>
> ###### disabled?
>
> > **`optional`** **disabled**: `boolean`
>
> ###### onClick()?
>
> > **`optional`** **onClick**: () => `void`
>
> ###### Returns
>
> `void`
>
> ###### primary?
>
> > **`optional`** **primary**: `boolean`
>
> ###### rounded?
>
> > **`optional`** **rounded**: `boolean`
>
> ###### text?
>
> > **`optional`** **text**: `string`
>

#### Source

[misskey.d.ts:311](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L311)

***

### container()

> **container**(`options`, `id`?): [`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

コンテナコンポーネント

#### Parameters

• **options**

パラメーター

• **options\.align?**: `"left"` \| `"center"` \| `"right"`

• **options\.bgColor?**: `string`

• **options\.borderColor?**: `string`

• **options\.borderWidth?**: `number`

• **options\.children?**: [`arr`](../../std/type-aliases/arr.md)\<[`IUiComponent`](IUiComponent.md)\<[`obj`](../../std/type-aliases/obj.md), `string`\>\>

• **options\.fgColor?**: `string`

• **options\.font?**: [`FontType`](../type-aliases/FontType.md)

• **options\.hidden?**: `boolean`

• **options\.padding?**: `number`

• **options\.rounded?**: `boolean`

• **id?**: `string`

コンポーネントID(必要であれば)

#### Returns

[`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

> ##### align?
>
> > **`optional`** **align**: `"left"` \| `"center"` \| `"right"`
>
> ##### bgColor?
>
> > **`optional`** **bgColor**: `string`
>
> ##### borderColor?
>
> > **`optional`** **borderColor**: `string`
>
> ##### borderWidth?
>
> > **`optional`** **borderWidth**: `number`
>
> ##### children?
>
> > **`optional`** **children**: [`arr`](../../std/type-aliases/arr.md)\<[`IUiComponent`](IUiComponent.md)\<[`obj`](../../std/type-aliases/obj.md), `string`\>\>
>
> ##### fgColor?
>
> > **`optional`** **fgColor**: `string`
>
> ##### font?
>
> > **`optional`** **font**: [`FontType`](../type-aliases/FontType.md)
>
> ##### hidden?
>
> > **`optional`** **hidden**: `boolean`
>
> ##### padding?
>
> > **`optional`** **padding**: `number`
>
> ##### rounded?
>
> > **`optional`** **rounded**: `boolean`
>

#### Source

[misskey.d.ts:224](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L224)

***

### folder()

> **folder**(`options`, `id`?): [`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

フォルダーコンポーネント

#### Parameters

• **options**

パラメーター

• **options\.children?**: [`IUiComponent`](IUiComponent.md)\<[`obj`](../../std/type-aliases/obj.md), `string`\>

• **options\.opened?**: `boolean`

• **options\.title?**: `string`

• **id?**: `string`

コンポーネントID(必要であれば)

#### Returns

[`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

> ##### children?
>
> > **`optional`** **children**: [`IUiComponent`](IUiComponent.md)\<[`obj`](../../std/type-aliases/obj.md), `string`\>
>
> ##### opened?
>
> > **`optional`** **opened**: `boolean`
>
> ##### title?
>
> > **`optional`** **title**: `string`
>

#### Source

[misskey.d.ts:342](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L342)

***

### mfm()

> **mfm**(`options`, `id`?): [`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

MFMテキストコンポーネント

#### Parameters

• **options**

パラメーター

• **options\.bold?**: `boolean`

• **options\.color?**: `string`

• **options\.font?**: [`FontType`](../type-aliases/FontType.md)

• **options\.onClickEv?**

• **options\.size?**: `number`

• **options\.text?**: `string`

• **id?**: `string`

コンポーネントID(必要であれば)

#### Returns

[`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

> ##### bold?
>
> > **`optional`** **bold**: `boolean`
>
> ##### color?
>
> > **`optional`** **color**: `string`
>
> ##### font?
>
> > **`optional`** **font**: [`FontType`](../type-aliases/FontType.md)
>
> ##### onClickEv()?
>
> > **`optional`** **onClickEv**: (`evName`) => `void`
>
> ###### Parameters
>
> • **evName**: `string`
>
> ###### Returns
>
> `void`
>
> ##### size?
>
> > **`optional`** **size**: `number`
>
> ##### text?
>
> > **`optional`** **text**: `string`
>

#### Source

[misskey.d.ts:253](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L253)

***

### numberInput()

> **numberInput**(`options`, `id`?): [`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

数値入力コンポーネント

#### Parameters

• **options**

パラメーター

• **options\.caption?**: `string`

• **options\.default?**: `number`

• **options\.label?**: `string`

• **options\.onInput?**

• **id?**: `string`

コンポーネントID(必要であれば)

#### Returns

[`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

> ##### caption?
>
> > **`optional`** **caption**: `string`
>
> ##### default?
>
> > **`optional`** **default**: `number`
>
> ##### label?
>
> > **`optional`** **label**: `string`
>
> ##### onInput()?
>
> > **`optional`** **onInput**: (`value`) => `void`
>
> ###### Parameters
>
> • **value**: `number`
>
> ###### Returns
>
> `void`
>

#### Source

[misskey.d.ts:288](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L288)

***

### postForm()

> **postForm**(`options`, `id`?): [`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

投稿フォーム(そのもの)コンポーネント

#### Parameters

• **options**

パラメーター

• **options\.form?**

• **options\.form\.text?**: `string`

• **id?**: `string`

コンポーネントID(必要であれば)

#### Returns

[`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

> ##### form?
>
> > **`optional`** **form**: `object`
>
> ##### form.text
>
> > **text**: `string`
>

#### Source

[misskey.d.ts:363](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L363)

***

### postFormButton()

> **postFormButton**(`options`, `id`?): [`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

投稿フォーム表示ボタンコンポーネント

#### Parameters

• **options**

パラメーター

• **options\.form?**

• **options\.form\.text?**: `string`

• **options\.primary?**: `boolean`

• **options\.rounded?**: `boolean`

• **options\.text?**: `string`

• **id?**: `string`

コンポーネントID(必要であれば)

#### Returns

[`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

> ##### form?
>
> > **`optional`** **form**: `object`
>
> ##### form.text
>
> > **text**: `string`
>
> ##### primary?
>
> > **`optional`** **primary**: `boolean`
>
> ##### rounded?
>
> > **`optional`** **rounded**: `boolean`
>
> ##### text?
>
> > **`optional`** **text**: `string`
>

#### Source

[misskey.d.ts:352](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L352)

***

### select()

> **select**(`options`, `id`?): [`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

プルダウンコンポーネント

#### Parameters

• **options**

パラメーター

• **options\.caption?**: `string`

• **options\.default?**: `string`

• **options\.items?**: [`arr`](../../std/type-aliases/arr.md)\<`object`\>

• **options\.label?**: `string`

• **options\.onChange?**

• **id?**: `string`

コンポーネントID(必要であれば)

#### Returns

[`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

> ##### caption?
>
> > **`optional`** **caption**: `string`
>
> ##### default?
>
> > **`optional`** **default**: `string`
>
> ##### items?
>
> > **`optional`** **items**: [`arr`](../../std/type-aliases/arr.md)\<`object`\>
>
> ###### Type declaration
>
> ###### text
>
> > **text**: `string`
>
> ###### value
>
> > **value**: `string`
>
> ##### label?
>
> > **`optional`** **label**: `string`
>
> ##### onChange()?
>
> > **`optional`** **onChange**: (`value`) => `void`
>
> ###### Parameters
>
> • **value**: `string`
>
> ###### Returns
>
> `void`
>

#### Source

[misskey.d.ts:330](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L330)

***

### switch()

> **switch**(`options`, `id`?): [`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

スイッチコンポーネント

#### Parameters

• **options**

パラメーター

• **options\.caption?**: `string`

• **options\.default?**: `boolean`

• **options\.label?**: `string`

• **options\.onChange?**

• **id?**: `string`

コンポーネントID(必要であれば)

#### Returns

[`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

> ##### caption?
>
> > **`optional`** **caption**: `string`
>
> ##### default?
>
> > **`optional`** **default**: `boolean`
>
> ##### label?
>
> > **`optional`** **label**: `string`
>
> ##### onChange()?
>
> > **`optional`** **onChange**: (`value`) => `void`
>
> ###### Parameters
>
> • **value**: `boolean`
>
> ###### Returns
>
> `void`
>

#### Source

[misskey.d.ts:319](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L319)

***

### text()

> **text**(`options`, `id`?): [`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

標準テキストコンポーネント

#### Parameters

• **options**

パラメーター

• **options\.bold?**: `boolean`

• **options\.color?**: `string`

• **options\.font?**: [`FontType`](../type-aliases/FontType.md)

• **options\.size?**: `number`

• **options\.text?**: `string`

• **id?**: `string`

コンポーネントID(必要であれば)

#### Returns

[`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

> ##### bold?
>
> > **`optional`** **bold**: `boolean`
>
> ##### color?
>
> > **`optional`** **color**: `string`
>
> ##### font?
>
> > **`optional`** **font**: [`FontType`](../type-aliases/FontType.md)
>
> ##### size?
>
> > **`optional`** **size**: `number`
>
> ##### text?
>
> > **`optional`** **text**: `string`
>

#### Source

[misskey.d.ts:241](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L241)

***

### textInput()

> **textInput**(`options`, `id`?): [`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

1行テキスト入力コンポーネント

#### Parameters

• **options**

パラメーター

• **options\.caption?**: `string`

• **options\.default?**: `string`

• **options\.label?**: `string`

• **options\.onInput?**

• **id?**: `string`

コンポーネントID(必要であれば)

#### Returns

[`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

> ##### caption?
>
> > **`optional`** **caption**: `string`
>
> ##### default?
>
> > **`optional`** **default**: `string`
>
> ##### label?
>
> > **`optional`** **label**: `string`
>
> ##### onInput()?
>
> > **`optional`** **onInput**: (`value`) => `void`
>
> ###### Parameters
>
> • **value**: `string`
>
> ###### Returns
>
> `void`
>

#### Source

[misskey.d.ts:277](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L277)

***

### textarea()

> **textarea**(`options`, `id`?): [`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

複数行テキスト入力コンポーネント

#### Parameters

• **options**

パラメーター

• **options\.caption?**: `string`

• **options\.default?**: `string`

• **options\.label?**: `string`

• **options\.onInput?**

• **id?**: `string`

コンポーネントID(必要であれば)

#### Returns

[`IUiComponent`](IUiComponent.md)\<`object`, `string`\>

> ##### caption?
>
> > **`optional`** **caption**: `string`
>
> ##### default?
>
> > **`optional`** **default**: `string`
>
> ##### label?
>
> > **`optional`** **label**: `string`
>
> ##### onInput()?
>
> > **`optional`** **onInput**: (`value`) => `void`
>
> ###### Parameters
>
> • **value**: `string`
>
> ###### Returns
>
> `void`
>

#### Source

[misskey.d.ts:266](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L266)
