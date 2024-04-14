---
title: Str
---

# Str

Str型Stdライブラリ\
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

[std.d.ts:772](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L772)

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

[std.d.ts:777](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L777)

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

[std.d.ts:782](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L782)

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

[std.d.ts:767](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L767)

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

[std.d.ts:760](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L760)
