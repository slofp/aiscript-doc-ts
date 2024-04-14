---
title: Async
---

# Async

非同期処理関数Stdライブラリ
`Async:`からアクセス可能です。

## 関数

### interval()

```ts
interval(
   interval, 
   callback, 
   immediate?): fn
```

指定した周期でコールバック関数を呼び出します。
戻り値として停止関数を返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `interval` | `num` |  |
| `callback` | `fn` |  |
| `immediate`? | `bool` |  |

#### 返り値

`fn`

#### Source

[std.d.ts:869](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L869)

***

### timeout()

```ts
timeout(delay, callback): fn
```

指定した時間経過後にコールバック関数を呼び出します。
戻り値として停止関数を返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `delay` | `num` |  |
| `callback` | `fn` |  |

#### 返り値

`fn`

#### Source

[std.d.ts:876](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L876)
