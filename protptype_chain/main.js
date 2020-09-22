
// プロトタイプチェーンとは
// プロトタイプの多重形成のこと。

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototypePerson.prototype.hello = function () {
    console.log("Person: hello " + this.name);
}

Object.prototypePerson.prototype.hello = function () {
    console.log("Object: hello " + this.name);
}

// 多重形成されたプロトタイプでは呼び出し先の優先順位が決まっており、
// __proto__で階層が浅い方から呼び出されていくことになる。

const bob = new Person("Bob", 18);
bob.hello();
