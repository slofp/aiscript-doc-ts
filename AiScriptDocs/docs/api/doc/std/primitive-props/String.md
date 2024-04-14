---
title: str
---

# str

文字列型プリミティブプロパティ

## プロパティ

| プロパティ | 型 | 説明 |
| :------ | :------ | :------ |
| `len` | `num` | 文字列の長さ |

## 関数

### charcode\_at()

```ts
charcode_at(i): num
```

i 番目のにある UTF-16 コード単位を表す 0 から 65535 までの整数を返します。
インデックスは UTF-16 コード単位に基づきます。

文字列にサロゲートペアが含まれる場合、位置によって上位または下位の孤立サロゲートを返すことがあります。

i 番目の文字が存在しない場合は null が返されます。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `i` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:146](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L146)

***

### codepoint\_at()

```ts
codepoint_at(i): num
```

i 番目の文字のコードポイントを取得します。
インデックスは UTF-16 コード単位に基づきます。

文字列にサロゲートペアが含まれ、指定位置が下位のサロゲートである場合、下位の孤立サロゲートを返します。

i 番目の文字が存在しない場合は null が返されます。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `i` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:156](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L156)

***

### incl()

```ts
incl(keyword): bool
```

文字列中に keyword が含まれていれば`true`、なければ`false`を返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `keyword` | `str` |  |

#### 返り値

`bool`

#### Source

[std.d.ts:101](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L101)

***

### index\_of()

```ts
index_of(search): num
```

文字列中から search を検索し、あれば何文字に存在したかを、なければ-1を返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `search` | `str` |  |

#### 返り値

`num`

#### Source

[std.d.ts:124](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L124)

***

### lower()

```ts
lower(): str
```

文字列中の英字を小文字に変換して返します。

#### 返り値

`str`

#### Source

[std.d.ts:136](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L136)

***

### pick()

```ts
pick(i): str
```

文字列中の i 番目の文字を取得します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `i` | `num` |  |

#### 返り値

`str`

#### Source

[std.d.ts:96](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L96)

***

### replace()

```ts
replace(old, _new): str
```

文字列中の old を _new に置換したものを返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `old` | `str` |  |
| `_new` | `str` |  |

#### 返り値

`str`

#### Source

[std.d.ts:119](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L119)

***

### slice()

```ts
slice(begin, end): str
```

文字列の begin 番目から end 番目の直前までの部分を取得します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `begin` | `num` |  |
| `end` | `num` |  |

#### 返り値

`str`

#### Source

[std.d.ts:107](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L107)

***

### split()

```ts
split(splitter?): arr<str>
```

文字列を splitter がある場所で区切り、配列にしたものを返します。
splitter が与えられなければ一文字づつ区切ります。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `splitter`? | `str` |  |

#### 返り値

`arr`\<`str`\>

#### Source

[std.d.ts:113](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L113)

***

### to\_arr()

```ts
to_arr(): arr<str>
```

文字列を書記素クラスタ毎に区切り、配列にしたものを返します。
文字列に孤立サロゲートが含まれない場合、孤立サロゲートを返すことはありません。

#### 返り値

`arr`\<`str`\>

#### Source

[std.d.ts:66](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L66)

***

### to\_char\_arr()

```ts
to_char_arr(): arr<str>
```

文字列を UTF-16 コード単位毎に区切り、配列にしたものを返します。
文字列にサロゲートペアが含まれる場合、上位と下位それぞれ孤立サロゲートを返します。

#### 返り値

`arr`\<`str`\>

#### Source

[std.d.ts:82](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L82)

***

### to\_charcode\_arr()

```ts
to_charcode_arr(): arr<num>
```

文字列を UTF-16 コード単位毎に区切り、それぞれUTF-16 コード単位を表す 0 から 65535 までの整数を取得し配列にしたものを返します。
文字列にサロゲートペアが含まれる場合、上位と下位それぞれ孤立サロゲートを返します。

#### 返り値

`arr`\<`num`\>

#### Source

[std.d.ts:87](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L87)

***

### to\_num()

```ts
to_num(): num
```

文字列が数字であれば、数値に変換します。

#### 返り値

`num`

変換ができた場合はnum、出来なかった場合はnullが返ります

#### Source

[std.d.ts:61](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L61)

***

### to\_unicode\_arr()

```ts
to_unicode_arr(): arr<str>
```

文字列を Unicode コードポイント毎に区切り、配列にしたものを返します。
書記素クラスタは分割されます。
文字列に孤立サロゲートが含まれない場合、孤立サロゲートを返すことはありません。

#### 返り値

`arr`\<`str`\>

#### Source

[std.d.ts:72](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L72)

***

### to\_unicode\_codepoint\_arr()

```ts
to_unicode_codepoint_arr(): arr<num>
```

文字列を Unicode コードポイント毎に区切り、それぞれコードポイント値を取得し配列にしたものを返します。
文字列に孤立サロゲートが含まれない場合、孤立サロゲートを返すことはありません。

#### 返り値

`arr`\<`num`\>

#### Source

[std.d.ts:77](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L77)

***

### to\_utf8\_byte\_arr()

```ts
to_utf8_byte_arr(): arr<num>
```

文字列を UTF-8 エンコードし、各バイト毎の 0 から 255 までの整数値を取得し配列にしたものを返します。

#### 返り値

`arr`\<`num`\>

#### Source

[std.d.ts:91](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L91)

***

### trim()

```ts
trim(): str
```

文字列の前後の空白を取り除いたものを返します。

#### 返り値

`str`

#### Source

[std.d.ts:128](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L128)

***

### upper()

```ts
upper(): str
```

文字列中の英字を大文字に変換して返します。

#### 返り値

`str`

#### Source

[std.d.ts:132](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L132)
