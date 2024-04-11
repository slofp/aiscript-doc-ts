---
---
**AiScript Api Docs** • [Readme](../../README.md) \| [API](../../modules.md)

***

[AiScript Api Docs](../../README.md) / [std](../README.md) / Async

# Interface: Async

## Methods

### interval()

> **interval**(`interval`, `callback`, `immediate`?): [`fn`](../type-aliases/fn.md)

指定した周期でコールバック関数を呼び出します。
戻り値として停止関数を返します。

#### Parameters

• **interval**: `number`

• **callback**: [`fn`](../type-aliases/fn.md)

• **immediate?**: `boolean`

#### Returns

[`fn`](../type-aliases/fn.md)

#### Source

[std.d.ts:739](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L739)

***

### timeout()

> **timeout**(`delay`, `callback`): [`fn`](../type-aliases/fn.md)

指定した時間経過後にコールバック関数を呼び出します。
戻り値として停止関数を返します。

#### Parameters

• **delay**: `number`

• **callback**: [`fn`](../type-aliases/fn.md)

#### Returns

[`fn`](../type-aliases/fn.md)

#### Source

[std.d.ts:746](https://github.com/slofp/aitslib/blob/417fe62f0102d90b12040038b8cfc8d08c6859ce/src/std.d.ts#L746)
