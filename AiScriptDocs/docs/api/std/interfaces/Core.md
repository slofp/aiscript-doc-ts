---
---
**AiScript Api Docs** • [Readme](../../README.md) \| [API](../../modules.md)

***

[AiScript Api Docs](../../README.md) / [std](../README.md) / Core

# Interface: Core

## Properties

### v

> **`readonly`** **v**: `string`

AiScriptのバージョンです。

#### Source

[std.d.ts:497](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L497)

## Methods

### sleep()

> **sleep**(`time`): `void`

指定時間（ミリ秒）待機します。

#### Parameters

• **time**: `any`

#### Returns

`void`

#### Source

[std.d.ts:512](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L512)

***

### to\_str()

> **to\_str**(`v`): `string`

値を表す文字列を取得します。

#### Parameters

• **v**: `any`

#### Returns

`string`

#### Source

[std.d.ts:507](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L507)

***

### type()

> **type**(`v`): `"null"` \| `"bool"` \| `"num"` \| `"str"` \| `"arr"` \| `"obj"`

値の型名を取得します。

#### Parameters

• **v**: `any`

#### Returns

`"null"` \| `"bool"` \| `"num"` \| `"str"` \| `"arr"` \| `"obj"`

#### Source

[std.d.ts:502](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L502)
