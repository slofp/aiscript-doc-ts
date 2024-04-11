---
---
**AiScript Api Docs** • [Readme](../../README.md) \| [API](../../modules.md)

***

[AiScript Api Docs](../../README.md) / [misskey](../README.md) / IUiComponent

# Interface: IUiComponent\<T, I\>

## Type parameters

• **T** extends [`obj`](../../std/type-aliases/obj.md)

• **I** extends [`str`](../../std/type-aliases/str.md) = [`str`](../../std/type-aliases/str.md)

## Properties

### id

> **id**: `I`

コンポーネントID

#### Source

[misskey.d.ts:209](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L209)

## Methods

### update()

> **update**(`options`): `void`

コンポーネントの状態を更新します

#### Parameters

• **options**: `T`

各コンポーネントが要求するパラメーター

#### Returns

`void`

#### Source

[misskey.d.ts:214](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L214)
