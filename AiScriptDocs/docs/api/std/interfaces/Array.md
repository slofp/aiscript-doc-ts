---
---
**AiScript Api Docs** • [Readme](../../README.md) \| [API](../../modules.md)

***

[AiScript Api Docs](../../README.md) / [std](../README.md) / Array

# Interface: Array\<T\>

## Type parameters

• **T**

## Indexable

 \[`n`: `number`\]: `T`

## Properties

### len

> **len**: `number`

配列の要素数を取得します。

#### Source

[std.d.ts:152](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L152)

## Methods

### `[iterator]`()

> **[iterator]**(): [`IterableIterator`](IterableIterator.md)\<`T`\>

#### Returns

[`IterableIterator`](IterableIterator.md)\<`T`\>

#### Source

[std.d.ts:142](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L142)

***

### concat()

> **concat**\<`U`\>(`b`): [`arr`](../type-aliases/arr.md)\<`T` \| `U`\>

配列を連結します。

#### Type parameters

• **U**

#### Parameters

• **b**: [`arr`](../type-aliases/arr.md)\<`U`\>

#### Returns

[`arr`](../type-aliases/arr.md)\<`T` \| `U`\>

#### Source

[std.d.ts:183](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L183)

***

### copy()

> **copy**(): [`arr`](../type-aliases/arr.md)\<`T`\>

配列のコピーを生成します。

#### Returns

[`arr`](../type-aliases/arr.md)\<`T`\>

#### Source

[std.d.ts:233](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L233)

***

### filter()

> **filter**(`func`): [`arr`](../type-aliases/arr.md)\<`T`\>

配列の要素のうち func が true を返すようなもののみを抜き出して返します。順序は維持されます。

#### Parameters

• **func**

#### Returns

[`arr`](../type-aliases/arr.md)\<`T`\>

#### Source

[std.d.ts:209](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L209)

***

### find()

> **find**(`func`): `T`

配列から func が true を返すような要素を探し、その値を返します。

#### Parameters

• **func**

#### Returns

`T`

#### Source

[std.d.ts:223](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L223)

***

### incl()

> **incl**(`i`): `boolean`

配列に指定した値が含まれているかどうかを返します。

#### Parameters

• **i**: `string` \| `number` \| `boolean`

#### Returns

`boolean`

#### Source

[std.d.ts:199](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L199)

***

### join()

> **join**(`joiner`?): `string`

文字列の配列を結合して一つの文字列として返します。

#### Parameters

• **joiner?**: `string`

#### Returns

`string`

#### Source

[std.d.ts:188](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L188)

***

### map()

> **map**\<`R`\>(`func`): [`arr`](../type-aliases/arr.md)\<`R`\>

配列の各要素に対し func を非同期的に呼び出します。 それぞれの要素を func の返り値で置き換えたものを返します。

#### Type parameters

• **R**

#### Parameters

• **func**

#### Returns

[`arr`](../type-aliases/arr.md)\<`R`\>

#### Source

[std.d.ts:204](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L204)

***

### pop()

> **pop**(): `T`

【この操作は配列を書き換えます】

配列の最後の要素を取り出します。

#### Returns

`T`

#### Source

[std.d.ts:172](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L172)

***

### push()

> **push**(`i`): `void`

【この操作は配列を書き換えます】

配列の最後に要素を追加します。

#### Parameters

• **i**: `T`

#### Returns

`void`

#### Source

[std.d.ts:159](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L159)

***

### reduce()

> **reduce**(`func`, `initial`): `T`

配列の各要素に対し func を順番に呼び出します。
各呼び出しでは、前回の結果が第1引数 acm として渡されます。

initial が指定された場合は初回呼び出しの引数が(initial, v[0], 0)、指定されなかった場合は(v[0], v[1], 1)となります。

#### Parameters

• **func**

• **initial**: `T`

#### Returns

`T`

#### Source

[std.d.ts:218](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L218)

***

### reverse()

> **reverse**(): `null`

【この操作は配列を書き換えます】

配列を反転させます。

#### Returns

`null`

#### Source

[std.d.ts:229](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L229)

***

### shift()

> **shift**(): `T`

【この操作は配列を書き換えます】

配列の最初の要素を取り出します。

#### Returns

`T`

#### Source

[std.d.ts:178](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L178)

***

### slice()

> **slice**(`begin`, `end`): [`arr`](../type-aliases/arr.md)\<`T`\>

配列の begin 番目から end 番目の部分を切り出して返します。

#### Parameters

• **begin**: `number`

• **end**: `number`

#### Returns

[`arr`](../type-aliases/arr.md)\<`T`\>

#### Source

[std.d.ts:194](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L194)

***

### sort()

> **sort**(`comp`): [`arr`](../type-aliases/arr.md)\<`T`\>

【この操作は配列を書き換えます】

配列の並べ替えをします。第1引数 comp として次のような比較関数を渡します。

a が b より順番的に前の時、負の値を返す

a が b より順番的に後の時、正の値を返す

a が b と順番的に同等の時、0を返す

数値の並び替えではCore:subを渡すことで昇順、@(a,b)\{b-a\}を渡すことで降順ソートができます。
文字列用の比較関数としてStr:lt（昇順）, Str:gt（降順）が用意されています。詳しくはstd.mdをご覧下さい。

#### Parameters

• **comp**

#### Returns

[`arr`](../type-aliases/arr.md)\<`T`\>

#### Source

[std.d.ts:249](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L249)

***

### unshift()

> **unshift**(`i`): `void`

【この操作は配列を書き換えます】

配列の最初に要素を追加します。

#### Parameters

• **i**: `T`

#### Returns

`void`

#### Source

[std.d.ts:166](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L166)
