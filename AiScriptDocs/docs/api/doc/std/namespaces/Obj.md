---
title: Obj
---

# Obj

Obj型Stdライブラリ
`Obj:`からアクセス可能です。

## 関数

### copy()

```ts
copy(v): obj
```

オブジェクトのコピーを生成します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `v` | `obj` |  |

#### 返り値

`obj`

#### Source

[std.d.ts:825](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L825)

***

### get()

```ts
get(v, key): any
```

オブジェクトからキーに対応した値を返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `v` | `obj` |  |
| `key` | `str` |  |

#### 返り値

`any`

#### Source

[std.d.ts:807](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L807)

***

### has()

```ts
has(v, key): bool
```

オブジェクトにキーが含まれているかを判定します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `v` | `obj` |  |
| `key` | `str` |  |

#### 返り値

`bool`

#### Source

[std.d.ts:820](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L820)

***

### keys()

```ts
keys(v): arr<str>
```

オブジェクトからキーの名前を取得します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `v` | `object` |  |

#### 返り値

`arr`\<`str`\>

#### Source

[std.d.ts:790](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L790)

***

### kvs()

```ts
kvs(v): arr<[str, any]>
```

オブジェクトのキー、値、キーと値の組を配列にして返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `v` | `obj` |  |

#### 返り値

`arr`\<[`str`, `any`]\>

#### Source

[std.d.ts:801](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L801)

***

### merge()

```ts
merge(o1, o2): obj
```

２つのオブジェクトを併合したものを返します。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `o1` | `obj` |  |
| `o2` | `obj` |  |

#### 返り値

`obj`

#### Source

[std.d.ts:831](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L831)

***

### set()

```ts
set(
   v, 
   key, 
   val): null
```

キーを使用してオブジェクトに値をいれます。

#### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `v` | `obj` |  |
| `key` | `str` |  |
| `val` | `any` |  |

#### 返り値

`null`

#### Source

[std.d.ts:814](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L814)

***

### vals()

#### vals(v)

```ts
vals<T>(v): arr<T>
```

オブジェクトからキーに対応した値だけを取り出します。

##### 型引数

| 型引数 |
| :------ |
| `T` |

##### パラメーター

| 引数 | 型 | 説明 |
| :------ | :------ | :------ |
| `v` | `object` |  |

##### 返り値

`arr`\<`T`\>

##### Source

[std.d.ts:795](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L795)

#### vals(v)

```ts
vals(v): arr<any>
```

##### パラメーター

| 引数 | 型 |
| :------ | :------ |
| `v` | `obj` |

##### 返り値

`arr`\<`any`\>

##### Source

[std.d.ts:796](https://github.com/slofp/aitslib/blob/1ed98771d7c48e377ec0f281f31b5b28ab0eeca0/src/std.d.ts#L796)
