---
---
**AiScript Api Docs** • [Readme](../../README.md) \| [API](../../modules.md)

***

[AiScript Api Docs](../../README.md) / [misskey](../README.md) / Plugin

# Interface: Plugin

## Properties

### config

> **`readonly`** **config**: [`obj`](../../std/type-aliases/obj.md)

メタデータで定義したコンフィグの設定データ

使用するにはメタデータでconfigを定義してください

#### Source

[misskey.d.ts:152](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L152)

## Methods

### open\_url()

> **open\_url**(`url`): `void`

第一引数に渡されたURLをブラウザの新しいタブで開きます。

urlは同一オリジンであっても新規タブで開かれます。

#### Parameters

• **url**: `string`

#### Returns

`void`

#### Source

[misskey.d.ts:198](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L198)

***

### register\_note\_action()

> **register\_note\_action**(`title`, `fn`): `void`

ノートメニューに項目を追加します。

#### Parameters

• **title**: `string`

アクションメニューに表示する名前

• **fn**

アクション。引数にノートオブジェクトを取ります。

#### Returns

`void`

#### Source

[misskey.d.ts:170](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L170)

***

### register\_note\_post\_interruptor()

> **register\_note\_post\_interruptor**(`fn`): `void`

ノート投稿時にノート情報を書き換えます。

#### Parameters

• **fn**

アクション。引数にノートオブジェクトを取り、返り値にはノートオブジェクトを返します。

#### Returns

`void`

#### Source

[misskey.d.ts:186](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L186)

***

### register\_note\_view\_interruptor()

> **register\_note\_view\_interruptor**(`fn`): `void`

UIに表示されるノート情報を書き換えます。

#### Parameters

• **fn**

アクション。引数にノートオブジェクトを取り、返り値にはノートオブジェクトを返します。null(void)を返した場合はノートは削除されます。

#### Returns

`void`

#### Source

[misskey.d.ts:181](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L181)

***

### register\_page\_view\_interruptor()

> **register\_page\_view\_interruptor**(`fn`): `void`

UIに表示されるページ情報を書き換えます。

#### Parameters

• **fn**

アクション。引数にページオブジェクトを取り、返り値にはページオブジェクトを返します。

#### Returns

`void`

#### Source

[misskey.d.ts:191](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L191)

***

### register\_post\_form\_action()

> **register\_post\_form\_action**(`title`, `fn`): `void`

投稿フォームにアクションを追加します。

#### Parameters

• **title**: `string`

アクションメニューに表示する名前

• **fn**

アクション。引数にノートオブジェクトと更新関数を取り、更新関数では指定したキーを値に置き換えます。

#### Returns

`void`

#### Source

[misskey.d.ts:158](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L158)

***

### register\_user\_action()

> **register\_user\_action**(`title`, `fn`): `void`

ユーザーメニューに項目を追加します。

#### Parameters

• **title**: `string`

アクションメニューに表示する名前

• **fn**

アクション。引数にユーザーオブジェクトを取ります。

#### Returns

`void`

#### Source

[misskey.d.ts:176](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L176)
