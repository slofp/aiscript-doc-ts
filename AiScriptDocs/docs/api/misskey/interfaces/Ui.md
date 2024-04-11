---
---
**AiScript Api Docs** • [Readme](../../README.md) \| [API](../../modules.md)

***

[AiScript Api Docs](../../README.md) / [misskey](../README.md) / Ui

# Interface: Ui

## Properties

### C

> **`readonly`** **C**: [`Component`](Component.md)

Uiコンポーネント

#### Source

[misskey.d.ts:389](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L389)

***

### root

> **`readonly`** **root**: [`IUiComponent`](IUiComponent.md)\<`object`, `"___root___"`\>

rootコンポーネント

#### Type declaration

##### children

> **children**: [`arr`](../../std/type-aliases/arr.md)\<[`IUiComponent`](IUiComponent.md)\<[`obj`](../../std/type-aliases/obj.md), `string`\>\>

#### Source

[misskey.d.ts:372](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L372)

## Methods

### get()

> **get**(`id`): [`IUiComponent`](IUiComponent.md)\<[`obj`](../../std/type-aliases/obj.md), `string`\>

コンポーネントIDからコンポーネントを取得します。

#### Parameters

• **id**: `string`

コンポーネントID

#### Returns

[`IUiComponent`](IUiComponent.md)\<[`obj`](../../std/type-aliases/obj.md), `string`\>

#### Source

[misskey.d.ts:384](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L384)

***

### render()

> **render**(`children`): `void`

レンダー関数

`Ui.root.update({})`の糖衣構文です。

#### Parameters

• **children**: [`arr`](../../std/type-aliases/arr.md)\<[`IUiComponent`](IUiComponent.md)\<[`obj`](../../std/type-aliases/obj.md), `string`\>\>

コンポーネント

#### Returns

`void`

#### Source

[misskey.d.ts:379](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L379)
