---
title: arr
---

# arr{"<"}T>

配列

## 型引数

| 型引数 |
| :------ |
| `T` |

## プロパティ

| プロパティ | 型 | 説明 |
| :------ | :------ | :------ |
| `len` | `num` | 配列の要素数を取得します。 |

## 関数

### concat()

```ts
concat<U>(b): arr<T | U>
```

配列を連結します。

#### 型引数

| 型引数 |
| :------ |
| `U` |

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `b` | `arr`\<`U`\> |  |

#### 返り値

`arr`\<`T` \| `U`\>

#### Source

[std.d.ts:233](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L233)

***

### copy()

```ts
copy(): arr<T>
```

配列のコピーを生成します。

#### 返り値

`arr`\<`T`\>

#### Source

[std.d.ts:283](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L283)

***

### filter()

```ts
filter(func): arr<T>
```

配列の要素のうち func が true を返すようなもののみを抜き出して返します。順序は維持されます。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `func` | (`value`) => `bool` |  |

#### 返り値

`arr`\<`T`\>

#### Source

[std.d.ts:259](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L259)

***

### find()

```ts
find(func): T
```

配列から func が true を返すような要素を探し、その値を返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `func` | (`item`, `index`) => `bool` |  |

#### 返り値

`T`

#### Source

[std.d.ts:273](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L273)

***

### incl()

```ts
incl(i): bool
```

配列に指定した値が含まれているかどうかを返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `i` | `string` \| `number` \| `boolean` \| `aiCoreT` |  |

#### 返り値

`bool`

#### Source

[std.d.ts:249](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L249)

***

### join()

```ts
join(joiner?): str
```

文字列の配列を結合して一つの文字列として返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `joiner`? | `str` |  |

#### 返り値

`str`

#### Source

[std.d.ts:238](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L238)

***

### map()

```ts
map<R>(func): arr<R>
```

配列の各要素に対し func を非同期的に呼び出します。 それぞれの要素を func の返り値で置き換えたものを返します。

#### 型引数

| 型引数 |
| :------ |
| `R` |

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `func` | (`value`) => `R` |  |

#### 返り値

`arr`\<`R`\>

#### Source

[std.d.ts:254](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L254)

***

### pop()

```ts
pop(): T
```

【この操作は配列を書き換えます】

配列の最後の要素を取り出します。

#### 返り値

`T`

#### Source

[std.d.ts:222](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L222)

***

### push()

```ts
push(i): void
```

【この操作は配列を書き換えます】

配列の最後に要素を追加します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `i` | `T` |  |

#### 返り値

`void`

#### Source

[std.d.ts:209](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L209)

***

### reduce()

```ts
reduce(func, initial): T
```

配列の各要素に対し func を順番に呼び出します。
各呼び出しでは、前回の結果が第1引数 acm として渡されます。

initial が指定された場合は初回呼び出しの引数が(initial, v[0], 0)、指定されなかった場合は(v[0], v[1], 1)となります。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `func` | (`acm`, `item`, `index`) => `T` |  |
| `initial` | `T` |  |

#### 返り値

`T`

#### Source

[std.d.ts:268](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L268)

***

### reverse()

```ts
reverse(): null
```

【この操作は配列を書き換えます】

配列を反転させます。

#### 返り値

`null`

#### Source

[std.d.ts:279](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L279)

***

### shift()

```ts
shift(): T
```

【この操作は配列を書き換えます】

配列の最初の要素を取り出します。

#### 返り値

`T`

#### Source

[std.d.ts:228](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L228)

***

### slice()

```ts
slice(begin, end): arr<T>
```

配列の begin 番目から end 番目の部分を切り出して返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `begin` | `num` |  |
| `end` | `num` |  |

#### 返り値

`arr`\<`T`\>

#### Source

[std.d.ts:244](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L244)

***

### sort()

```ts
sort(comp): arr<T>
```

【この操作は配列を書き換えます】

配列の並べ替えをします。第1引数 comp として次のような比較関数を渡します。

a が b より順番的に前の時、負の値を返す

a が b より順番的に後の時、正の値を返す

a が b と順番的に同等の時、0を返す

数値の並び替えではCore:subを渡すことで昇順、@(a,b)\{b-a\}を渡すことで降順ソートができます。
文字列用の比較関数としてStr:lt（昇順）, Str:gt（降順）が用意されています。詳しくはstd.mdをご覧下さい。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `comp` | (`a`, `b`) => `num` |  |

#### 返り値

`arr`\<`T`\>

#### Source

[std.d.ts:299](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L299)

***

### unshift()

```ts
unshift(i): void
```

【この操作は配列を書き換えます】

配列の最初に要素を追加します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `i` | `T` |  |

#### 返り値

`void`

#### Source

[std.d.ts:216](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L216)
