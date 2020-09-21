
// instanceofとは
// どのコンストラクターら生成されたオブジェクトかを確認する。


function F(a, b) {
    this.a = a;
    this.b = b;
    // return {};
}

F.prototype.c = function () { }

const instance = new F(1, 2);
console.log(instance instanceof F);  // true
// instanceがどのコンストラクターから生成されたかを確認するためにinstanceofを使う。

// 9行目のコメントアウトを外すと、false