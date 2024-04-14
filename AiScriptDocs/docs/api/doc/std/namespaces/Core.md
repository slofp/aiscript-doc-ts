---
title: Core
---

# Core

コア系Stdライブラリ\
`Core:`からアクセス可能です。

## プロパティ

| プロパティ | Modifier | 型 | 説明 |
| :------ | :------ | :------ | :------ |
| `v` | `readonly` | `str` | AiScriptのバージョンです。 |

## 関数

### sleep()

```ts
sleep(time): void
```

指定時間（ミリ秒）待機します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `time` | `any` |  |

#### 返り値

`void`

#### Source

[std.d.ts:587](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L587)

***

### to\_str()

```ts
to_str(v): str
```

値を表す文字列を取得します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `v` | `any` |  |

#### 返り値

`str`

#### Source

[std.d.ts:582](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L582)

***

### type()

```ts
type(v): 
  | "null"
  | "bool"
  | "num"
  | "str"
  | "arr"
  | "obj"
```

値の型名を取得します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `v` | `any` |  |

#### 返り値

  \| `"null"`
  \| `"bool"`
  \| `"num"`
  \| `"str"`
  \| `"arr"`
  \| `"obj"`

vで与えられた型の名前、str型が返ります。

#### Source

[std.d.ts:577](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/std.d.ts#L577)
