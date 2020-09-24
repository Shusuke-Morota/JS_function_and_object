
// クラス継承
// 他のクラスのプロパティーとメソッドを継承すること。

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() {
        console.log("hello " + this.name);
    }
}
// これでPersonクラスの完成

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.hello = function () {
//     console.log("hello " + this.name);
// }

class Japanese extends Person {
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
    }

    hello() {
        console.log("Konnitiwa " + this.name);
    }

    bye() {
        console.log("Sayonara " + this.name);
    }
}
// コンストラクター関数の場合はPersonのcallを呼ぶ必要があったが、
// クラスの継承では特別にextendsが用意用意されているのでこちらを使う。
// コンストラクターで用意するのはsuoer
// superが実行されると、personのコンストラクターが実行される。(5行目)
// あとはJapanese特有のメソッドを同じコンストラクターに並べる。

// function Japanese(name, age, gender) {
//     Person.call(this, name, age);
//     this.gender = gender;
// }

// Japanese.prototype = Object.create(Person.prototype)

// Japanese.prototype.hello = function () {
//     console.log("Konnitiwa " + this.name);
// }

// Japanese.prototype.bye = function () {
//     console.log("Sayonara " + this.name);
// }

const taro = new Japanese("Taro", 23, "Male");
console.log(taro);