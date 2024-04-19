---
sidebar_position: 3
---

# もし開発時に困ったら

## エラーが発生したら

コードの作成中、何かしらのエラーに遭遇することがあります。エラーは現状英語で記述されています。これは一例です。

```
Runtime: Cannot assign to an immutable variable hoge.
```

エラーにはパース時と実行時の2種類が大まかに分けられます。

## パース時のエラー

基本的には以下のような文章で始まるエラー文です。

```
Parsing error. (Line 1:2)
```

これはコードの文法が何らかの理由で間違っていることを意味します。どの場所が間違えているかはカッコ内の「Line 行:列」を見ることで参照が可能です。

その他、パース時のエラーには以下のような文章が存在します。

### `Reserved word "<名前>" cannot be used as variable name.`

このエラーは変数名に予約語を使用した際に出されます。

:::tip[使用できない予約語]

<details>
  <summary>以下の単語は予約語として定義されているため使用できません。</summary>
  - null
  - true
  - false
  - each
  - for
  - loop
  - break
  - continue
  - match
  - if
  - elif
  - else
  - return
  - eval
  - var
  - let
  - exists
  - fn
  - namespace
  - meta
  - attr
  - attribute
  - static
  - class
  - struct
  - module
  - while
  - import
  - export
</details>

:::

```
// ok
let a = 0

// ng
let if = a
// Reserved word "if" cannot be used as variable name.

```

### `invalid attribute.`

このエラーは無効なアトリビュートをコードに記述した際に出されます。

アトリビュートは変数・定数・関数定義のいずれかにのみ追加が可能で、それ以外ではこのエラーが出されます。

```
#[attr1]
let hoge = 'ok'

#[attr2 'ok']
@func() {

}

#[attr3]
func() // invalid attribute.

#[attr4]
if (a == b) {

}
// invalid attribute.

#[attr5]
// invalid attribute.

```

### `No such operator: <演算子>.`

通常起こり得ないエラーです。このエラーは演算式からの適切な関数名が存在しない場合に出されます。

### `Unknown type: <型名>`

通常起こり得ないエラーです。このエラーはパースには成功していますが型検証段階で不明な型が存在している場合に出されます。

## 実行時のエラー

実行時のエラーでは実際のソースコードを実行した段階で発生する可能性があるエラーの一覧です。スタックトレースは存在しないため、エラー発生時は目grepしてください。

### `Expect <期待された型名>, but got <実際の型名 or nothing>.`

このエラーは、期待された型と実際に入力された値の型が違った場合に起きるエラーです。

また、任意の型を取る際に値が入力されていない場合は`Expect anything, but got nothing.`と表示されます。

### `Arr:create expected integer, got non-integer`

`Arr:create`関数を使用した際に整数値以外を入力した際に起きるエラーです。

### `Arr:create expected non-negative number, got negative`

`Arr:create`関数を使用した際に負の値を入力した際に起きるエラーです。

### `Invalid operation.`

このエラーは算術関数関係で無効な操作がされた際に出るエラーです。

```
// これは √-1 となり実数として表せないため無効な操作となります。
-1 ^ 0.5
```

### `Variable '<変数名>' is alerady exists in scope '<スコープ名>'`

このエラーはスコープ内に変数名がすでに定義されている場合に起きるエラーです。

### `Cannot assign to an immutable variable <変数名>.`

このエラーは`let`(定数)として定義されている変数に変更を加えようとした際に起きるエラーです。

### `No such variable '<変数名>' in scope '<スコープ名>'`

このエラーはスコープに変数が存在しないときに起きるエラーです。

### `max step exceeded`

システム側で指定されていない限り起こることはないエラーです。このエラーはコードが長すぎるために起きるエラーです。

もしこのエラーが出た場合はコードを短くして実行してください。

### `Cannot read prop (<値>) of <型>.`

このエラーはプロパティとしてアクセスできない型を参照してプロパティにアクセスしようとした際に起きるエラーです。

```
// ok
a[0]

// ng
null[0]
```

### `The left-hand side of an assignment expression must be a variable or a property/index access.`

代入の左辺が変数、もしくはプロパティや配列のインデックス参照出ない場合に起きるエラーです。

```
// ok
a = 1
b.p = 1
c[0] = 1

// ng
0 = 1
```

### `arr.repeat expected non-negative number, got negative`

`arr<T>.repeat`関数を使用した際に負の値を入力した際に起きるエラーです。

### `arr.repeat expected integer, got non-integer`

`arr<T>.repeat`関数を使用した際に整数値以外を入力した際に起きるエラーです。

### `No such prop (<プロパティ名>) in <型名>.`

このエラーはアクセスしている型に指定したプロパティが存在しない際に出るエラーです。

### `Cannot read prop of <型名>. (reading <プロパティ名>)`

このエラーはプロパティとしてアクセスできない型にアクセスしようとして出るエラーです。

`reading`にはアクセスしようとした名前が表示されます。

### `Index out of range. index: <数値> max: <数値>`

このエラーは配列の範囲外にアクセスした際に発生するエラーです。

`index`が評価時にアクセスしようとしたインデックスの値、`max`がアクセスしようとした配列の最大インデックス値です。

### その他

`Core:abort(message)`関数を使用すると`message`に記述された内容がエラーとして表示されます。
