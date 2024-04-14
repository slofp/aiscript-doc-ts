---
title: Math
---

# Math

数学・数値計算関連標準ライブラリ
`Math:`からアクセス可能です。

## プロパティ

| プロパティ | Modifier | 型 | 説明 |
| :------ | :------ | :------ | :------ |
| `E` | `readonly` | `num` | ネイピア数e |
| `Infinity` | `readonly` | `num` | 無限大 |
| `LN10` | `readonly` | `num` | 10の自然対数 |
| `LN2` | `readonly` | `num` | 2の自然対数 |
| `LOG10E` | `readonly` | `num` | 10を底としたeの対数 |
| `LOG2E` | `readonly` | `num` | 2を底としたeの対数 |
| `PI` | `readonly` | `num` | 円周率π |
| `SQRT1_2` | `readonly` | `num` | √(1/2) |
| `SQRT2` | `readonly` | `num` | √2 |

## 関数

### abs()

```ts
abs(x): num
```

絶対値を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:363](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L363)

***

### acos()

```ts
acos(x): num
```

逆余弦を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:441](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L441)

***

### acosh()

```ts
acosh(x): num
```

双曲線逆余弦を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:477](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L477)

***

### asin()

```ts
asin(x): num
```

逆正弦を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:436](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L436)

***

### asinh()

```ts
asinh(x): num
```

双曲線逆正弦を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:472](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L472)

***

### atan()

```ts
atan(x): num
```

逆正接を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:446](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L446)

***

### atan2()

```ts
atan2(y, x): num
```

y /x の正接を返しますが、x が負値の場合はπだけずれた値を返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `y` | `num` |  |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:452](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L452)

***

### atanh()

```ts
atanh(x): num
```

双曲線逆正接を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:482](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L482)

***

### cbrt()

```ts
cbrt(x): num
```

立方根を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:411](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L411)

***

### ceil()

```ts
ceil(x): num
```

引数以上の最小の整数を返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:379](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L379)

***

### clz32()

```ts
clz32(x): num
```

xを32ビットのバイナリで表現したときの先頭の0の個数を返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:537](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L537)

***

### cos()

```ts
cos(rad): num
```

余弦を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `rad` | `num` | 角度の単位はラジアンです。 |

#### 返り値

`num`

#### Source

[std.d.ts:426](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L426)

***

### cosh()

```ts
cosh(x): num
```

双曲線余弦を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:462](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L462)

***

### exp()

```ts
exp(x): num
```

eの x 乗を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:493](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L493)

***

### expm1()

```ts
expm1(x): num
```

eの x 乗から1を引いた値を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:498](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L498)

***

### floor()

```ts
floor(x): num
```

引数以下の最大の整数を返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:384](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L384)

***

### fround()

```ts
fround(x): num
```

x を32ビットの浮動小数点数に変換した時の値を返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:542](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L542)

***

### gen\_rng()

```ts
gen_rng(seed): () => num
```

シードから乱数生成機を生成します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `seed` | `string` \| `number` \| `aiCoreT` |  |

#### 返り値

`Function`

> ##### 返り値
>
> `num`
>

#### Source

[std.d.ts:532](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L532)

***

### hypot()

```ts
hypot(vs): num
```

vs の要素をそれぞれ自乗してから合計した値の正の平方根を返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `vs` | `arr`\<`any`\> |  |

#### 返り値

`num`

#### Source

[std.d.ts:416](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L416)

***

### imul()

```ts
imul(x, y): num
```

x と y に対しC言語風の32ビット乗算を行った結果を返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |
| `y` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:548](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L548)

***

### log()

```ts
log(x): num
```

自然対数を計算します。常用対数にはMath:log10を使用して下さい。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:503](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L503)

***

### log10()

```ts
log10(x): num
```

10を底とした対数を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:513](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L513)

***

### log1p()

```ts
log1p(x): num
```

x +1の自然対数を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:508](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L508)

***

### log2()

```ts
log2(x): num
```

2を底とした対数を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:518](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L518)

***

### max()

```ts
max(a, b): num
```

大きい方の値を取得します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `a` | `num` |  |
| `b` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:401](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L401)

***

### min()

```ts
min(a, b): num
```

小さい方の値を取得します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `a` | `num` |  |
| `b` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:395](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L395)

***

### pow()

```ts
pow(x, y): num
```

x の y 乗を計算します。結果がNaNとなることを許容する点、内部的にJavascriptの**演算子ではなくMath.pow関数を用いている点の２つを除き、ほぼCore:powと同じものです。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |
| `y` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:488](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L488)

***

### rnd()

```ts
rnd(min?, max?): num
```

乱数を生成します。

min および max を渡した場合、min \<= x, x \<= max の整数、
渡していない場合は 0 \<= x, x \< 1 の 小数が返されます。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `min`? | `num` |  |
| `max`? | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:527](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L527)

***

### round()

```ts
round(x): num
```

四捨五入して、もっとも近い整数を返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:374](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L374)

***

### sign()

```ts
sign(x): num
```

x が正であれば1、負であれば-1、0または-0であればそのままの値を返します。
いずれでもなければNaNを返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:369](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L369)

***

### sin()

```ts
sin(rad): num
```

正弦を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `rad` | `num` | 角度の単位はラジアンです。 |

#### 返り値

`num`

#### Source

[std.d.ts:421](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L421)

***

### sinh()

```ts
sinh(x): num
```

双曲線正弦を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:457](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L457)

***

### sqrt()

```ts
sqrt(x): num
```

正の平方根を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:406](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L406)

***

### tan()

```ts
tan(rad): num
```

正接を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `rad` | `num` | 角度の単位はラジアンです。 |

#### 返り値

`num`

#### Source

[std.d.ts:431](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L431)

***

### tanh()

```ts
tanh(x): num
```

双曲線正接を計算します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:467](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L467)

***

### trunc()

```ts
trunc(x): num
```

引数の小数部を切り捨て、整数部を返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `x` | `num` |  |

#### 返り値

`num`

#### Source

[std.d.ts:389](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L389)
