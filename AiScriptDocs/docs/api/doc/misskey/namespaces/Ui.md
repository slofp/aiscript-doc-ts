---
title: Ui
---

# Ui

MisskeyUIライブラリ
`Ui:`からアクセス可能です。

## Remarks

このライブラリはプラグインでは使用できません。

## プロパティ

| プロパティ | Modifier | 型 | 説明 |
| :------ | :------ | :------ | :------ |
| `C` | `readonly` | [`Component`](Component.md) | MisskeyUIコンポーネントライブラリ<br />`Ui:C:`からアクセス可能です。<br /><br />**Remarks**<br />このライブラリはプラグインでは使用できません。 |
| `root` | `readonly` | [`IUiComponent`](../interfaces/IUiComponent.md)\<`object`, `"___root___"`\> | rootコンポーネント |

## 関数

### get()

```ts
get(id): IUiComponent<obj, str>
```

コンポーネントIDからコンポーネントを取得します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `id` | `str` | コンポーネントID |

#### 返り値

[`IUiComponent`](../interfaces/IUiComponent.md)\<`obj`, `str`\>

#### Source

[misskey.d.ts:424](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/misskey.d.ts#L424)

***

### render()

```ts
render(children): void
```

レンダー関数

`Ui.root.update({})`の糖衣構文です。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `children` | `arr`\<[`IUiComponent`](../interfaces/IUiComponent.md)\<`obj`, `str`\>\> | コンポーネント |

#### 返り値

`void`

#### Source

[misskey.d.ts:419](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/misskey.d.ts#L419)
