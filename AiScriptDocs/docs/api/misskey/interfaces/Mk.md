---
---
**AiScript Api Docs** • [Readme](../../README.md) \| [API](../../modules.md)

***

[AiScript Api Docs](../../README.md) / [misskey](../README.md) / Mk

# Interface: Mk

## Methods

### api()

> **api**(`endpoint`, `params`, `token`?): [`obj`](../../std/type-aliases/obj.md) \| [`Error`](../../std/interfaces/Error.md)

現在のサーバーのapiを送信します。

サーバーが使用できる各エンドポイントはAPI Consoleまたはapi/endpointsを参照してください。

#### Parameters

• **endpoint**: `string`

エンドポイント

• **params**: [`obj`](../../std/type-aliases/obj.md)

各エンドポイントが要求するパラメーター

• **token?**: `string`

apiトークン(必要であれば)。

#### Returns

[`obj`](../../std/type-aliases/obj.md) \| [`Error`](../../std/interfaces/Error.md)

#### Source

[misskey.d.ts:117](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L117)

***

### confirm()

> **confirm**(`title`, `text`, `type`?): `boolean`

#### Parameters

• **title**: `string`

タイトル

• **text**: `string`

テキスト

• **type?**: [`ModalIconType`](../type-aliases/ModalIconType.md)

アイコン表記

#### Returns

`boolean`

「はい」を選択したら`true`、「いいえ」を選択したら`false`になります

#### Source

[misskey.d.ts:108](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L108)

***

### dialog()

> **dialog**(`title`, `text`, `type`?): `null`

ダイアログを表示します。

#### Parameters

• **title**: `string`

タイトル

• **text**: `string`

テキスト

• **type?**: [`ModalIconType`](../type-aliases/ModalIconType.md)

アイコン表記

#### Returns

`null`

#### Source

[misskey.d.ts:100](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L100)

***

### load()

> **load**(`key`): `any`

キーに対応したデータをローカルストレージから取得します。

#### Parameters

• **key**: `string`

キー

#### Returns

`any`

#### Source

[misskey.d.ts:128](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L128)

***

### nyaize()

> **nyaize**(`text`): `string`

テキストをnayizeします。

#### Parameters

• **text**: `string`

テキスト

#### Returns

`string`

#### Source

[misskey.d.ts:139](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L139)

***

### save()

> **save**(`key`, `value`): `null`

データをkey-valueでローカルストレージに保存します。

#### Parameters

• **key**: `string`

キー

• **value**: `any`

値

#### Returns

`null`

#### Source

[misskey.d.ts:123](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L123)

***

### url()

> **url**(): `string`

現在のurlを取得します。

オリジンのみを取得したい場合は`SERVER_URL`を推奨します。

#### Returns

`string`

#### Source

[misskey.d.ts:134](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/misskey.d.ts#L134)
