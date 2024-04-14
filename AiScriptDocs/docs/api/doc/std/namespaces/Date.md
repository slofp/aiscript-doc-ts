---
title: Date
---

# Date

日付処理系Stdライブラリ
`Date:`からアクセス可能です。

## 関数

### day()

```ts
day(date?): num
```

現在時刻の日を取得します。

date を渡した場合、_date_に対応する日、
渡していない場合は現在時刻の日が返されます。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `date`? | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:676](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L676)

***

### hour()

```ts
hour(date?): num
```

現在時刻の時を取得します。

date を渡した場合、_date_に対応する時、
渡していない場合は現在時刻の時が返されます。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `date`? | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:684](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L684)

***

### minute()

```ts
minute(date?): num
```

現在時刻の分を取得します。

date を渡した場合、_date_に対応する分、
渡していない場合は現在時刻の分が返されます。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `date`? | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:692](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L692)

***

### month()

```ts
month(date?): num
```

現在時刻の月を取得します。

date を渡した場合、_date_に対応する月、
渡していない場合は現在時刻の月が返されます。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `date`? | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:668](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L668)

***

### now()

```ts
now(): num
```

現在時刻を取得します。

#### 返り値

`num`

#### Source

[std.d.ts:652](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L652)

***

### parse()

```ts
parse(date): num
```

日時の文字列からUNIX時間(ミリ秒含む)を返します。
本質的には`new Date(date).getTime()`と変わりません。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `date` | `str` |  |

#### 返り値

`num`

#### Source

[std.d.ts:706](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L706)

***

### second()

```ts
second(date?): num
```

現在時刻の秒を取得します。

date を渡した場合、_date_に対応する秒、
渡していない場合は現在時刻の秒が返されます。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `date`? | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:700](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L700)

***

### year()

```ts
year(date?): num
```

時刻の年を取得します。

date を渡した場合、_date_に対応する年、
渡していない場合は現在時刻の年が返されます。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `date`? | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:660](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L660)
