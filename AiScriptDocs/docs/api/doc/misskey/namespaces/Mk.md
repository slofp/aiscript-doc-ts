---
title: Mk
---

# Mk

Misskeyメインライブラリ\
`Mk:`からアクセス可能です。

## 関数

### api()

```ts
api(
   endpoint, 
   params, 
   token?): obj | Error
```

現在のサーバーのapiを送信します。

サーバーが使用できる各エンドポイントはAPI Consoleまたはapi/endpointsを参照してください。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `endpoint` | `str` | エンドポイント |
| `params` | `obj` | 各エンドポイントが要求するパラメーター |
| `token`? | `str` | apiトークン(必要であれば)。 |

#### 返り値

`obj` \| [`Error`](../../std/primitive-props/Error.md)

#### Source

[misskey.d.ts:133](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L133)

***

### confirm()

```ts
confirm(
   title, 
   text, 
   type?): bool
```

確認ダイアログを表示します

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `title` | `str` | タイトル |
| `text` | `str` | テキスト |
| `type`? | [`ModalIconType`](../type-aliases/ModalIconType.md) | アイコン表記 |

#### 返り値

`bool`

「はい」を選択したら`true`、「いいえ」を選択したら`false`になります

#### Source

[misskey.d.ts:124](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L124)

***

### dialog()

```ts
dialog(
   title, 
   text, 
   type?): null
```

ダイアログを表示します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `title` | `str` | タイトル |
| `text` | `str` | テキスト |
| `type`? | [`ModalIconType`](../type-aliases/ModalIconType.md) | アイコン表記 |

#### 返り値

`null`

#### Source

[misskey.d.ts:116](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L116)

***

### load()

```ts
load(key): any
```

キーに対応したデータをローカルストレージから取得します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `key` | `str` | キー |

#### 返り値

`any`

#### Source

[misskey.d.ts:144](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L144)

***

### nyaize()

```ts
nyaize(text): str
```

テキストをnayizeします。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `text` | `str` | テキスト |

#### 返り値

`str`

#### Source

[misskey.d.ts:155](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L155)

***

### save()

```ts
save(key, value): null
```

データをkey-valueでローカルストレージに保存します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `key` | `str` | キー |
| `value` | `any` | 値 |

#### 返り値

`null`

#### Source

[misskey.d.ts:139](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L139)

***

### url()

```ts
url(): str
```

現在のurlを取得します。

オリジンのみを取得したい場合は`SERVER_URL`を推奨します。

#### 返り値

`str`

#### Source

[misskey.d.ts:150](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L150)
