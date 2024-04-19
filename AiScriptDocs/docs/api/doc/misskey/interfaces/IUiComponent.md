---
title: IUiComponent
---

# IUiComponent{"<"}T, I>

Uiコンポーネントインターフェース\
Uiコンポーネントは共通してこれらの変数と関数を保持しています。

## 型引数

| 型引数 | デフォルト値 | 説明 |
| :------ | :------ | :------ |
| `T` extends `ComponentOption` | - | 各コンポーネントのパラメータータイプ |
| `I` extends `str` | `str` | - |

## プロパティ

| プロパティ | 型 | 説明 |
| :------ | :------ | :------ |
| `id` | `I` | コンポーネントID |

## 関数

### update()

```ts
update(options): void
```

コンポーネントの状態を更新します

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `options` | `T` | 各コンポーネントが要求するパラメーター |

#### 返り値

`void`

#### Source

[misskey.d.ts:243](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/misskey.d.ts#L243)
