---
title: Json
---

# Json

Json処理系Stdライブラリ
`Json:`からアクセス可能です。

## 関数

### parsable()

```ts
parsable(str): bool
```

文字列がJSONとしてパース可能であるかの判定を行います。歴史的理由により存在しています

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `str` | `str` |  |

#### 返り値

`bool`

#### Source

[std.d.ts:636](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L636)

***

### parse()

```ts
parse(json): any
```

JSONをパースします。 引数がJSONとしてパース可能性でない場合、エラー型の値（name='not_json'）を返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `json` | `str` |  |

#### 返り値

`any`

#### Source

[std.d.ts:631](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L631)

***

### stringify()

```ts
stringify(v): str
```

JSONを生成します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `v` | `any` |  |

#### 返り値

`str`

#### Source

[std.d.ts:626](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L626)
