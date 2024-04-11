---
---
**AiScript Api Docs** • [Readme](../../README.md) \| [API](../../modules.md)

***

[AiScript Api Docs](../../README.md) / [std](../README.md) / String

# Interface: String

## Properties

### len

> **len**: `number`

文字列の長さを取得します。

#### Source

[std.d.ts:20](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L20)

## Methods

### charcode\_at()

> **charcode\_at**(`i`): `number`

i 番目のにある UTF-16 コード単位を表す 0 から 65535 までの整数を返します。
インデックスは UTF-16 コード単位に基づきます。

文字列にサロゲートペアが含まれる場合、位置によって上位または下位の孤立サロゲートを返すことがあります。

i 番目の文字が存在しない場合は null が返されます。

#### Parameters

• **i**: `number`

#### Returns

`number`

#### Source

[std.d.ts:109](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L109)

***

### codepoint\_at()

> **codepoint\_at**(`i`): `number`

i 番目の文字のコードポイントを取得します。
インデックスは UTF-16 コード単位に基づきます。

文字列にサロゲートペアが含まれ、指定位置が下位のサロゲートである場合、下位の孤立サロゲートを返します。

i 番目の文字が存在しない場合は null が返されます。

#### Parameters

• **i**: `number`

#### Returns

`number`

#### Source

[std.d.ts:119](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L119)

***

### incl()

> **incl**(`keyword`): `boolean`

文字列中に keyword が含まれていれば`true`、なければ`false`を返します。

#### Parameters

• **keyword**: `string`

#### Returns

`boolean`

#### Source

[std.d.ts:64](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L64)

***

### index\_of()

> **index\_of**(`search`): `number`

文字列中から search を検索し、あれば何文字に存在したかを、なければ-1を返します。

#### Parameters

• **search**: `string`

#### Returns

`number`

#### Source

[std.d.ts:87](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L87)

***

### lower()

> **lower**(): `string`

文字列中の英字を小文字に変換して返します。

#### Returns

`string`

#### Source

[std.d.ts:99](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L99)

***

### pick()

> **pick**(`i`): `string`

文字列中の i 番目の文字を取得します。

#### Parameters

• **i**: `number`

#### Returns

`string`

#### Source

[std.d.ts:59](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L59)

***

### replace()

> **replace**(`old`, `_new`): `string`

文字列中の old を _new に置換したものを返します。

#### Parameters

• **old**: `string`

• **\_new**: `string`

#### Returns

`string`

#### Source

[std.d.ts:82](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L82)

***

### slice()

> **slice**(`begin`, `end`): `string`

文字列の begin 番目から end 番目の直前までの部分を取得します。

#### Parameters

• **begin**: `number`

• **end**: `number`

#### Returns

`string`

#### Source

[std.d.ts:70](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L70)

***

### split()

> **split**(`splitter`?): [`arr`](../type-aliases/arr.md)\<`string`\>

文字列を splitter がある場所で区切り、配列にしたものを返します。
splitter が与えられなければ一文字づつ区切ります。

#### Parameters

• **splitter?**: `string`

#### Returns

[`arr`](../type-aliases/arr.md)\<`string`\>

#### Source

[std.d.ts:76](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L76)

***

### to\_arr()

> **to\_arr**(): [`arr`](../type-aliases/arr.md)\<`string`\>

文字列を書記素クラスタ毎に区切り、配列にしたものを返します。
文字列に孤立サロゲートが含まれない場合、孤立サロゲートを返すことはありません。

#### Returns

[`arr`](../type-aliases/arr.md)\<`string`\>

#### Source

[std.d.ts:29](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L29)

***

### to\_char\_arr()

> **to\_char\_arr**(): [`arr`](../type-aliases/arr.md)\<`string`\>

文字列を UTF-16 コード単位毎に区切り、配列にしたものを返します。
文字列にサロゲートペアが含まれる場合、上位と下位それぞれ孤立サロゲートを返します。

#### Returns

[`arr`](../type-aliases/arr.md)\<`string`\>

#### Source

[std.d.ts:45](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L45)

***

### to\_charcode\_arr()

> **to\_charcode\_arr**(): [`arr`](../type-aliases/arr.md)\<`number`\>

文字列を UTF-16 コード単位毎に区切り、それぞれUTF-16 コード単位を表す 0 から 65535 までの整数を取得し配列にしたものを返します。
文字列にサロゲートペアが含まれる場合、上位と下位それぞれ孤立サロゲートを返します。

#### Returns

[`arr`](../type-aliases/arr.md)\<`number`\>

#### Source

[std.d.ts:50](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L50)

***

### to\_num()

> **to\_num**(): `number`

文字列が数字であれば、数値に変換します。

#### Returns

`number`

#### Source

[std.d.ts:24](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L24)

***

### to\_unicode\_arr()

> **to\_unicode\_arr**(): [`arr`](../type-aliases/arr.md)\<`string`\>

文字列を Unicode コードポイント毎に区切り、配列にしたものを返します。
書記素クラスタは分割されます。
文字列に孤立サロゲートが含まれない場合、孤立サロゲートを返すことはありません。

#### Returns

[`arr`](../type-aliases/arr.md)\<`string`\>

#### Source

[std.d.ts:35](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L35)

***

### to\_unicode\_codepoint\_arr()

> **to\_unicode\_codepoint\_arr**(): [`arr`](../type-aliases/arr.md)\<`number`\>

文字列を Unicode コードポイント毎に区切り、それぞれコードポイント値を取得し配列にしたものを返します。
文字列に孤立サロゲートが含まれない場合、孤立サロゲートを返すことはありません。

#### Returns

[`arr`](../type-aliases/arr.md)\<`number`\>

#### Source

[std.d.ts:40](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L40)

***

### to\_utf8\_byte\_arr()

> **to\_utf8\_byte\_arr**(): [`arr`](../type-aliases/arr.md)\<`number`\>

文字列を UTF-8 エンコードし、各バイト毎の 0 から 255 までの整数値を取得し配列にしたものを返します。

#### Returns

[`arr`](../type-aliases/arr.md)\<`number`\>

#### Source

[std.d.ts:54](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L54)

***

### trim()

> **trim**(): `string`

文字列の前後の空白を取り除いたものを返します。

#### Returns

`string`

#### Source

[std.d.ts:91](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L91)

***

### upper()

> **upper**(): `string`

文字列中の英字を大文字に変換して返します。

#### Returns

`string`

#### Source

[std.d.ts:95](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L95)
