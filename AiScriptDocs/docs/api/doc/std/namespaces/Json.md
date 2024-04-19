---
title: Json
---

# Json

Json処理系Stdライブラリ\
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

[std.d.ts:645](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L645)

***

### parse()

```ts
parse(json): any
```

JSONをパースします。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `json` | `str` |  |

#### 返り値

`any`

パースされたjsonのobj型を返します。引数がJSONとしてパース可能性でない場合、エラー型の値（name='not_json'）を返します。

#### Source

[std.d.ts:640](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L640)

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

[std.d.ts:634](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L634)
