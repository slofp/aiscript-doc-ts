---
---
**AiScript Api Docs** • [Readme](../../README.md) \| [API](../../modules.md)

***

[AiScript Api Docs](../../README.md) / [std](../README.md) / Str

# Interface: Str

## Properties

### lf

> **`readonly`** **lf**: `string`

改行コード(LF)です。

#### Source

[std.d.ts:638](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L638)

## Methods

### from\_codepoint()

> **from\_codepoint**(`codepoint`): `string`

Unicodeのコードポイントから文字を生成します。

#### Parameters

• **codepoint**: `number`

0 以上、10FFFF(16) 以下である必要があります。

#### Returns

`string`

#### Source

[std.d.ts:657](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L657)

***

### from\_unicode\_codepoints()

> **from\_unicode\_codepoints**(`codePoints`): `string`

Unicodeのコードポイント列を表す数値の配列から文字を生成します。

#### Parameters

• **codePoints**: [`arr`](../type-aliases/arr.md)\<`number`\>

各要素は 0 以上、10FFFF(16) 以下である必要があります。

#### Returns

`string`

#### Source

[std.d.ts:662](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L662)

***

### from\_utf8\_bytes()

> **from\_utf8\_bytes**(`bytes`): `string`

UTF-8のバイト列を表す数値の配列から文字を生成します。

#### Parameters

• **bytes**: [`arr`](../type-aliases/arr.md)\<`number`\>

各要素は 0 以上、255 以下である必要があります。

#### Returns

`string`

#### Source

[std.d.ts:667](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L667)

***

### gt()

> **gt**(`a`, `b`): `number`

a > b ならば -1、a == b ならば 0、a < b ならば 1 を返します。
arr.sortの比較関数として使用できます。

#### Parameters

• **a**: `string`

• **b**: `string`

#### Returns

`number`

#### Source

[std.d.ts:652](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L652)

***

### lt()

> **lt**(`a`, `b`): `number`

a `< b ならば -1、a == b ならば 0、a >` b ならば 1 を返します。
arr.sortの比較関数として使用できます。

#### Parameters

• **a**: `string`

• **b**: `string`

#### Returns

`number`

#### Source

[std.d.ts:645](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L645)
