
// プロパティーの設定値
// value 値
// configurable 設定変更可能性
// enumerable 列挙可能性
// writable 値の変更可能性


const obj = { prop: 0 };
// descriptorを確認してみる。
const descriptor = Object.getOwnPropertyDescriptor(obj, "prop");
// 第一引数に対象のオブジェクトを、第二引数にプロパティーの名前を渡す。
console.log(descriptor);
// オブジェクトリテラルでプロパティーを定義した場合、全ての値がtureで設定される。

// ９行目のように定義するのではなく、defineプロパティーというdescriptorを設定できるような
// メソッドを使ってプロパティーを定義してみる。

"use strict"

const obj = {};
Object.defineProperty(obj, "prop", {
    value: 0
    writable: ture　// これ書き換えが変更できる
})

const descriptor = Object.getOwnPropertyDescriptor(obj, "prop");
console.log(descriptor);
// defineプロパティーを用いて、プロパティーを定義した場合には、
// デフォルト値はfalse

// writableがfalseでも書き換えを行うとエラーは特に発生しない。
// これだと開発者が気付きにくいため、先頭に"use strict"を記述してあげる。


// それぞれのプロパティーにはdescriptorというものが存在していて、
// この設定値によって挙動が変わってくる。
