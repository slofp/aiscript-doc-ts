---
title: Date
---

# Date

日付処理系Stdライブラリ\
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

[std.d.ts:685](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L685)

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

[std.d.ts:693](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L693)

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

[std.d.ts:701](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L701)

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

[std.d.ts:677](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L677)

***

### now()

```ts
now(): num
```

現在時刻を取得します。

#### 返り値

`num`

#### Source

[std.d.ts:661](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L661)

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

[std.d.ts:715](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L715)

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

[std.d.ts:709](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L709)

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

[std.d.ts:669](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L669)
