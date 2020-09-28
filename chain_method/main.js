
// チェーンメソッド
// 1つのインスタンスに対して、連続して処理を行うときに使われる。

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello(person) {
        console.log(`&{this.name} says hello &{person.name}`);
        return this;
    }

    introduce() {
        console.log(`Hi I'm ${this.name}, &{this.age} years old`);
        return this;
    }
}

const bob = new Person('Bob', 23);
const tin = new Person('Tim', 33);

bob.hello(tim)
    .introduce()

     // bob.helloの戻り値がPersonであることは即ち、
     // Personのコンストラクターから生成されたbobというのがまさしく、
     // Personのインスタンスであるということが分かる。

     // helloメソッドの戻り値を設定してあげればいい。
     // returnでthisを返してあげればいい。

