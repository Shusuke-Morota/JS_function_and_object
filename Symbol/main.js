
// シンボル
// プロパティーの重複を避けるために、必ず1位の一意の値を返す関数
// シンボルはプリミティブ型の値の1つであり、値を取得するには必ず関数から取得する。


const s = Symbol();
// この関数はコンストラクター関数とは違い、new演算子を用いない
console.log(s);  // Symbol()
// シンボルというプリミティブ型は、文字列ではなく、内部的に一意となるようなデータ構造になっている。


const s = Symbol("hello");
console.log(s);  // Symbol(hello)

const s = Symbol("hello");
const s2 = Symbol("hello");
console.log(s === s2)  // false
// シンボルにとる引数の文字列は、シンボルの名前を付けているだけであって、同じシンボルを付けていることにはならない。
// 呼び出しごとにシンボルの値が変わってくる。


// シンボルの利用例

const str = new String("Tom")
console.log(str);