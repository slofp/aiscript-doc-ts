---
---
**AiScript Api Docs** • [Readme](../../README.md) \| [API](../../modules.md)

***

[AiScript Api Docs](../../README.md) / [std](../README.md) / Obj

# Interface: Obj

## Methods

### copy()

> **copy**(`v`): [`obj`](../type-aliases/obj.md)

オブジェクトのコピーを生成します。

#### Parameters

• **v**: [`obj`](../type-aliases/obj.md)

#### Returns

[`obj`](../type-aliases/obj.md)

#### Source

[std.d.ts:711](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L711)

***

### get()

> **get**(`v`, `key`): `any`

オブジェクトからキーに対応した値を返します。

#### Parameters

• **v**: [`obj`](../type-aliases/obj.md)

• **key**: `string`

#### Returns

`any`

#### Source

[std.d.ts:693](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L693)

***

### has()

> **has**(`v`, `key`): `boolean`

オブジェクトにキーが含まれているかを判定します。

#### Parameters

• **v**: [`obj`](../type-aliases/obj.md)

• **key**: `string`

#### Returns

`boolean`

#### Source

[std.d.ts:706](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L706)

***

### keys()

> **keys**(`v`): [`arr`](../type-aliases/arr.md)\<`string`\>

オブジェクトからキーの名前を取得します。

#### Parameters

• **v**: `object`

#### Returns

[`arr`](../type-aliases/arr.md)\<`string`\>

#### Source

[std.d.ts:676](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L676)

***

### kvs()

> **kvs**(`v`): [`arr`](../type-aliases/arr.md)\<[`string`, `any`]\>

オブジェクトのキー、値、キーと値の組を配列にして返します。

#### Parameters

• **v**: [`obj`](../type-aliases/obj.md)

#### Returns

[`arr`](../type-aliases/arr.md)\<[`string`, `any`]\>

#### Source

[std.d.ts:687](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L687)

***

### merge()

> **merge**(`o1`, `o2`): [`obj`](../type-aliases/obj.md)

２つのオブジェクトを併合したものを返します。

#### Parameters

• **o1**: [`obj`](../type-aliases/obj.md)

• **o2**: [`obj`](../type-aliases/obj.md)

#### Returns

[`obj`](../type-aliases/obj.md)

#### Source

[std.d.ts:717](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L717)

***

### set()

> **set**(`v`, `key`, `val`): `null`

キーを使用してオブジェクトに値をいれます。

#### Parameters

• **v**: [`obj`](../type-aliases/obj.md)

• **key**: `string`

• **val**: `any`

#### Returns

`null`

#### Source

[std.d.ts:700](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L700)

***

### vals()

#### vals(v)

> **vals**\<`T`\>(`v`): [`arr`](../type-aliases/arr.md)\<`T`\>

オブジェクトからキーに対応した値だけを取り出します。

##### Type parameters

• **T**

##### Parameters

• **v**

##### Returns

[`arr`](../type-aliases/arr.md)\<`T`\>

##### Source

[std.d.ts:681](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L681)

#### vals(v)

> **vals**(`v`): [`arr`](../type-aliases/arr.md)\<`any`\>

##### Parameters

• **v**: [`obj`](../type-aliases/obj.md)

##### Returns

[`arr`](../type-aliases/arr.md)\<`any`\>

##### Source

[std.d.ts:682](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L682)
