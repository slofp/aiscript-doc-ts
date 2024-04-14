---
title: str
---

# str

文字列

## プロパティ

| プロパティ | 型 | 説明 |
| :------ | :------ | :------ |
| `len` | `num` | 文字列の長さを取得します。 |

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

[std.d.ts:144](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L144)

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

[std.d.ts:154](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L154)

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

[std.d.ts:99](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L99)

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

[std.d.ts:122](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L122)

***

### lower()

```ts
lower(): str
```

文字列中の英字を小文字に変換して返します。

#### 返り値

`str`

#### Source

[std.d.ts:134](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L134)

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

[std.d.ts:94](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L94)

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

[std.d.ts:117](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L117)

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

[std.d.ts:105](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L105)

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

[std.d.ts:111](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L111)

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

[std.d.ts:64](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L64)

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

[std.d.ts:80](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L80)

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

[std.d.ts:85](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L85)

***

### to\_num()

```ts
to_num(): num
```

文字列が数字であれば、数値に変換します。

#### 返り値

`num`

#### Source

[std.d.ts:59](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L59)

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

[std.d.ts:70](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L70)

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

[std.d.ts:75](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L75)

***

### to\_utf8\_byte\_arr()

```ts
to_utf8_byte_arr(): arr<num>
```

文字列を UTF-8 エンコードし、各バイト毎の 0 から 255 までの整数値を取得し配列にしたものを返します。

#### 返り値

`arr`\<`num`\>

#### Source

[std.d.ts:89](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L89)

***

### trim()

```ts
trim(): str
```

文字列の前後の空白を取り除いたものを返します。

#### 返り値

`str`

#### Source

[std.d.ts:126](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L126)

***

### upper()

```ts
upper(): str
```

文字列中の英字を大文字に変換して返します。

#### 返り値

`str`

#### Source

[std.d.ts:130](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L130)
