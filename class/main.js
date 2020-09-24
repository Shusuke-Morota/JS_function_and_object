
// クラス
// コンストラクター関数をクラス表記で書けるようにしたもの。→シンタックスシュガー

// Personのコンストラクターをクラスに書き換えていく
// コンストラクター関数を定義する
// 16行目〜19行目と同じ役割を果たす
// prototypeに格納しているメソッドはコンストラクターと同じ並びに追加する
// = fubctionのところは削除する

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log("hello " + this.name);
    }
}

// Personのクラスをインスタンス化してオブジェクトを生成してみる

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log("hello " + this.name);
    }
}

const bob = new Person("Bob", 23);
console.log(bob);


    // function Person(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }

//     Person.prototype.hello = function () {
//     console.log("hello " + this.name);
// }

