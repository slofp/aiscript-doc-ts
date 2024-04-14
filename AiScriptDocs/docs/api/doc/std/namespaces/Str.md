---
title: Str
---

# Str

Str型Stdライブラリ
`Str:`からアクセス可能です。

## プロパティ

| プロパティ | Modifier | 型 | 説明 |
| :------ | :------ | :------ | :------ |
| `lf` | `readonly` | `str` | 改行コード(LF)です。 |

## 関数

### from\_codepoint()

```ts
from_codepoint(codepoint): str
```

Unicodeのコードポイントから文字を生成します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `codepoint` | `num` | 0 以上、10FFFF(16) 以下である必要があります。 |

#### 返り値

`str`

#### Source

[std.d.ts:763](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L763)

***

### from\_unicode\_codepoints()

```ts
from_unicode_codepoints(codePoints): str
```

Unicodeのコードポイント列を表す数値の配列から文字を生成します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `codePoints` | `arr`\<`num`\> | 各要素は 0 以上、10FFFF(16) 以下である必要があります。 |

#### 返り値

`str`

#### Source

[std.d.ts:768](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L768)

***

### from\_utf8\_bytes()

```ts
from_utf8_bytes(bytes): str
```

UTF-8のバイト列を表す数値の配列から文字を生成します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `bytes` | `arr`\<`num`\> | 各要素は 0 以上、255 以下である必要があります。 |

#### 返り値

`str`

#### Source

[std.d.ts:773](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L773)

***

### gt()

```ts
gt(a, b): num
```

a > b ならば -1、a == b ならば 0、a \< b ならば 1 を返します。
arr.sortの比較関数として使用できます。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `a` | `str` |  |
| `b` | `str` |  |

#### 返り値

`num`

#### Source

[std.d.ts:758](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L758)

***

### lt()

```ts
lt(a, b): num
```

a `\< b ならば -1、a == b ならば 0、a >` b ならば 1 を返します。
arr.sortの比較関数として使用できます。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `a` | `str` |  |
| `b` | `str` |  |

#### 返り値

`num`

#### Source

[std.d.ts:751](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L751)
