---
---
**AiScript Api Docs** • [Readme](../../README.md) \| [API](../../modules.md)

***

[AiScript Api Docs](../../README.md) / [std](../README.md) / Json

# Interface: Json

## Methods

### parsable()

> **parsable**(`str`): `boolean`

文字列がJSONとしてパース可能であるかの判定を行います。歴史的理由により存在しています

#### Parameters

• **str**: `string`

#### Returns

`boolean`

#### Source

[std.d.ts:554](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L554)

***

### parse()

> **parse**(`json`): `any`

JSONをパースします。 引数がJSONとしてパース可能性でない場合、エラー型の値（name='not_json'）を返します。

#### Parameters

• **json**: `string`

#### Returns

`any`

#### Source

[std.d.ts:549](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L549)

***

### stringify()

> **stringify**(`v`): `string`

JSONを生成します。

#### Parameters

• **v**: `any`

#### Returns

`string`

#### Source

[std.d.ts:544](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L544)
