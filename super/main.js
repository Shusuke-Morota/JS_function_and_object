
// suoerとは
// 関数コンテキスト内で使える特別なキーワード
// 継承元の関数を呼び出すためのキーワード


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() {
        console.log("hello " + this.name);
    }
}
// クラスのコンストラクターは関数コンテキストで実行されている。

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
// superで１番利用されるのは、他のクラスを継承した（ここではPerson）コンストラクター内で
// superによってPersonのコンストラクター呼び出す際である。
// またsuperは親のコンストラクターを呼び出すだけではなく、親のメソッドを呼び出すこともできる。例えば、


const american = {
    hello() {
        console.log("hello " + this.name);
    }
}

const bob = {
    name: "Bob",
    hello() {
        super.hello();
        console.log("hello " + this.name);
    }
}
Object.setPrototypeOf(bob, american);
bob.hello(); // hello Bob

// ここでbobというオブジェクトに対して、americanというオブジェクトをプロトタイプに追加してみる。
