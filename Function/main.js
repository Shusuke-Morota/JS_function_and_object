
// 関数は実行可能なオブジェクトである。

new Function("a", "b", "return a + b"); // 関数コンストラクターで表すとこんな感じ。

function fn(a, b) {  // 上記の関数コンストラクターを普通の関数宣言で表すとこんな感じ。
    return a + b;
}




const fn1 = new Function("a", "b", "return a + b")
const result = fn1(1, 2);
console.log(result);  // 出力結果3

function fn2(a, b) {
    return a + b;
}
console.log(fn2 instanceof Function); // true
// 関数宣言を使った場合にも、帰ってくるのは関数コンストラクターから生成されたインスタンスということになる。
// 故にfn2に対して、instanceofでどのコンストラクターから生成されたかを確認すると、
// fn2もFunctionコンストラクターから生成されたインスタンスであることが言え、最終的にfn2はオブジェクトであると言える。



// newの関数コンストラクターで作成しているオブジェクトというのは、
// あくまで関数オブジェクトであるため、コンストラクトでnewを作るのとは違う。

const obj = new function () {
    this.a = 0;
}
const fn3 = new Function("return;");
console.log(obj, fn3);

// 第一引数のobjは無名関数から生成したobjインスタンス