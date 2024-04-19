---
title: Math
---

# Math

数学・数値計算関連標準ライブラリ\
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

[std.d.ts:366](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L366)

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

[std.d.ts:444](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L444)

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

[std.d.ts:480](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L480)

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

[std.d.ts:439](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L439)

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

[std.d.ts:475](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L475)

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

[std.d.ts:449](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L449)

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

[std.d.ts:455](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L455)

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

[std.d.ts:485](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L485)

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

[std.d.ts:414](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L414)

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

[std.d.ts:382](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L382)

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

[std.d.ts:544](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L544)

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

[std.d.ts:429](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L429)

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

[std.d.ts:465](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L465)

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

[std.d.ts:496](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L496)

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

[std.d.ts:501](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L501)

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

[std.d.ts:387](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L387)

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

[std.d.ts:549](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L549)

***

### gen\_rng()

```ts
gen_rng(seed): (min?, max?) => num
```

シードから乱数生成機を生成します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `seed` | `string` \| `number` \| `aiCoreT` |  |

#### 返り値

`Function`

乱数を生成する関数を返します。\
min および max を渡した場合、min \<= x, x \<= max の整数、
渡していない場合は 0 \<= x, x \< 1 の 小数が返されます。

> ##### パラメーター
>
> | 引数 | 型 |
> | :------ | :------ |
> | `min`? | `num` |
> | `max`? | `num` |
>
> ##### 返り値
>
> `num`
>

#### Source

[std.d.ts:539](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L539)

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

[std.d.ts:419](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L419)

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

[std.d.ts:555](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L555)

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

[std.d.ts:506](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L506)

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

[std.d.ts:516](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L516)

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

[std.d.ts:511](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L511)

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

[std.d.ts:521](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L521)

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

[std.d.ts:404](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L404)

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

[std.d.ts:398](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L398)

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

[std.d.ts:491](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L491)

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

[std.d.ts:530](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L530)

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

[std.d.ts:377](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L377)

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

[std.d.ts:372](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L372)

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

[std.d.ts:424](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L424)

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

[std.d.ts:460](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L460)

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

[std.d.ts:409](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L409)

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

[std.d.ts:434](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L434)

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

[std.d.ts:470](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L470)

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

[std.d.ts:392](https://github.com/slofp/aitslib/blob/a951a81256505be593b745decf74b16c08c3727f/src/std.d.ts#L392)
