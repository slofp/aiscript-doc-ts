---
title: IUiComponent
---

# IUiComponent{"<"}T, I>

Uiコンポーネントインターフェース
Uiコンポーネントは共通してこれらの変数と関数を保持しています。

## 型引数

| 型引数 | 値 |
| :------ | :------ |
| `T` extends `obj` | - |
| `I` extends `str` | `str` |

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

[misskey.d.ts:234](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/misskey.d.ts#L234)