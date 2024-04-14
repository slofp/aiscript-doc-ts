---
title: Ui
---

# Ui

MisskeyUIライブラリ\
`Ui:`からアクセス可能です。

## Remarks

このライブラリはプラグインでは使用できません。

## プロパティ

| プロパティ | Modifier | 型 | 説明 |
| :------ | :------ | :------ | :------ |
| `C` | `readonly` | [`Ui:C`](Component.md) | MisskeyUIコンポーネントライブラリ<br />`Ui:C:`からアクセス可能です。<br /><br />**Remarks**<br />このライブラリはプラグインでは使用できません。 |
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

[misskey.d.ts:488](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L488)

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

[misskey.d.ts:483](https://github.com/slofp/aitslib/blob/c68ee63df45b36b0270b35442b084a226b762eeb/src/misskey.d.ts#L483)
