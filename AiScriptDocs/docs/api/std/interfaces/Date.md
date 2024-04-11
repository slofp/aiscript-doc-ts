---
---
**AiScript Api Docs** • [Readme](../../README.md) \| [API](../../modules.md)

***

[AiScript Api Docs](../../README.md) / [std](../README.md) / Date

# Interface: Date

## Methods

### day()

> **day**(`date`?): `number`

現在時刻の日を取得します。

date を渡した場合、_date_に対応する日、
渡していない場合は現在時刻の日が返されます。

#### Parameters

• **date?**: `number`

#### Returns

`number`

#### Source

[std.d.ts:586](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L586)

***

### hour()

> **hour**(`date`?): `number`

現在時刻の時を取得します。

date を渡した場合、_date_に対応する時、
渡していない場合は現在時刻の時が返されます。

#### Parameters

• **date?**: `number`

#### Returns

`number`

#### Source

[std.d.ts:594](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L594)

***

### minute()

> **minute**(`date`?): `number`

現在時刻の分を取得します。

date を渡した場合、_date_に対応する分、
渡していない場合は現在時刻の分が返されます。

#### Parameters

• **date?**: `number`

#### Returns

`number`

#### Source

[std.d.ts:602](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L602)

***

### month()

> **month**(`date`?): `number`

現在時刻の月を取得します。

date を渡した場合、_date_に対応する月、
渡していない場合は現在時刻の月が返されます。

#### Parameters

• **date?**: `number`

#### Returns

`number`

#### Source

[std.d.ts:578](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L578)

***

### now()

> **now**(): `number`

現在時刻を取得します。

#### Returns

`number`

#### Source

[std.d.ts:562](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L562)

***

### parse()

> **parse**(`date`): `number`

日時の文字列からUNIX時間(ミリ秒含む)を返します。
本質的には`new Date(date).getTime()`と変わりません。

#### Parameters

• **date**: `string`

#### Returns

`number`

#### Source

[std.d.ts:616](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L616)

***

### second()

> **second**(`date`?): `number`

現在時刻の秒を取得します。

date を渡した場合、_date_に対応する秒、
渡していない場合は現在時刻の秒が返されます。

#### Parameters

• **date?**: `number`

#### Returns

`number`

#### Source

[std.d.ts:610](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L610)

***

### year()

> **year**(`date`?): `number`

時刻の年を取得します。

date を渡した場合、_date_に対応する年、
渡していない場合は現在時刻の年が返されます。

#### Parameters

• **date?**: `number`

#### Returns

`number`

#### Source

[std.d.ts:570](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L570)
