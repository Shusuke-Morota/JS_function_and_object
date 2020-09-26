
// ラッパーオブジェクト
// プリミティブ値を内包するオブジェクト

const a = new String("hello");
console.log(a);   // String{"hello"}
console.log(a.toUpperCase());  // HELLO  toUpperCaseは文字列を大文字にするメソッド
// new Stringは省略可能だし、以下のような書き換えもできる
const a = "hello".toUpperCase();



const b = new Number(100);
console.log(b);  // Number{100}  100という値が格納されたオブジェクトが生成される
console.log(b.toExponential());  // 1e+2 10の2乗


// プリミティブ型で宣言した変数は、メソッドが呼ばれる際には暗黙的にラッパーオブジェクトが呼ばれる