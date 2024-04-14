---
title: Core
---

# Core

コア系Stdライブラリ
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

[std.d.ts:579](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L579)

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

[std.d.ts:574](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L574)

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

#### Source

[std.d.ts:569](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L569)
