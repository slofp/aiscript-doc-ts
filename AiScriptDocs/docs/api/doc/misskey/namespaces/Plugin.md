---
title: Plugin
---

# Plugin

Misskeyプラグイン用ライブラリ\
`Plugin:`からアクセス可能です。

## Remarks

このライブラリはプラグイン以外での使用はできません。

## プロパティ

| プロパティ | Modifier | 型 | 説明 |
| :------ | :------ | :------ | :------ |
| `config` | `readonly` | `obj` | メタデータで定義したコンフィグの設定データ<br /><br />使用するにはメタデータでconfigを定義してください |

## 関数

### open\_url()

```ts
open_url(url): void
```

第一引数に渡されたURLをブラウザの新しいタブで開きます。

urlは同一オリジンであっても新規タブで開かれます。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `url` | `str` |  |

#### 返り値

`void`

#### Source

[misskey.d.ts:221](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L221)

***

### register\_note\_action()

```ts
register_note_action(title, fn): void
```

ノートメニューに項目を追加します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `title` | `str` | アクションメニューに表示する名前 |
| `fn` | (`note`) => `void` | アクション。引数にノートオブジェクトを取ります。 |

#### 返り値

`void`

#### Source

[misskey.d.ts:193](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L193)

***

### register\_note\_post\_interruptor()

```ts
register_note_post_interruptor(fn): void
```

ノート投稿時にノート情報を書き換えます。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `fn` | (`note`) => `obj` | アクション。引数にノートオブジェクトを取り、返り値にはノートオブジェクトを返します。 |

#### 返り値

`void`

#### Source

[misskey.d.ts:209](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L209)

***

### register\_note\_view\_interruptor()

```ts
register_note_view_interruptor(fn): void
```

UIに表示されるノート情報を書き換えます。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `fn` | (`note`) => `void` \| `obj` | アクション。引数にノートオブジェクトを取り、返り値にはノートオブジェクトを返します。null(void)を返した場合はノートは削除されます。 |

#### 返り値

`void`

#### Source

[misskey.d.ts:204](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L204)

***

### register\_page\_view\_interruptor()

```ts
register_page_view_interruptor(fn): void
```

UIに表示されるページ情報を書き換えます。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `fn` | (`page`) => `obj` | アクション。引数にページオブジェクトを取り、返り値にはページオブジェクトを返します。 |

#### 返り値

`void`

#### Source

[misskey.d.ts:214](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L214)

***

### register\_post\_form\_action()

```ts
register_post_form_action(title, fn): void
```

投稿フォームにアクションを追加します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `title` | `str` | アクションメニューに表示する名前 |
| `fn` | (`form`, `update`) => `void` | アクション。引数にノートオブジェクトと更新関数を取り、更新関数では指定したキーを値に置き換えます。 |

#### 返り値

`void`

#### Source

[misskey.d.ts:181](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L181)

***

### register\_user\_action()

```ts
register_user_action(title, fn): void
```

ユーザーメニューに項目を追加します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `title` | `str` | アクションメニューに表示する名前 |
| `fn` | (`user`) => `void` | アクション。引数にユーザーオブジェクトを取ります。 |

#### 返り値

`void`

#### Source

[misskey.d.ts:199](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L199)
