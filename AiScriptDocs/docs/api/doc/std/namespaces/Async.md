---
title: Async
---

# Async

非同期処理関数Stdライブラリ\
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

停止関数を返します

#### Source

[std.d.ts:879](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L879)

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

停止関数を返します

#### Source

[std.d.ts:887](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L887)
