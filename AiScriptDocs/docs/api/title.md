# APIリファレンス

AiScriptのAPIリファレンスです。現時点で追加されている関数などが記載されています。これらの内容はMisskeyやAiScriptの変更によって随時追加や更新が行われる可能性があります。

また、このドキュメントはTypedocからの生成をしているため記述はTypeScriptの記述になっています。

:::info
このAPIリファレンスではAiScriptには実際に存在しない「型引数」、「インターフェース」、「定数タイプ」が存在します。これらはTypeDoc(TypeScript)の名残です。

- 型引数

  TypeScriptのジェネリクスです。
  型引数ではその型に対して何かしら任意の型に変化できる型のことを指します。例えば、`arr<T>`は配列型を意味しますが、配列型の中身は任意の型であるため`T`にはその配列型の中身にどのような型が含まれるかを意味します。

- インターフェース

  TypeScriptのインターフェースです。
  インターフェースでは、`obj`型に対する共通プロパティやプロパティ情報を明確化させるために使用されます。

- 定数タイプ

  TypeScriptのユニオン文字列リテラル型に相当します。AiScriptでは`str`型として指定されることになります。
  Misskey上でのダイアログの表示形式やコンポーネントのフォント指定など、固定値のいずれかを選択するような型のことを指します。

:::

## [Misskey](/docs/category/misskey)

Misskeyで使用されるライブラリ群です。Misskey上でのプラグインやPlayを実装するような際に使用されます。

このAPIリファレンスでは本家Misskeyを元に作成されているため、フォーク先で独自追加されている関数などは別途サーバーでご確認ください。

## [Std](/docs/category/std)

AiScriptで提供されている標準ライブラリです。