
// prototypeとは
// オブジェクトに存在する特別なプロパティー。
// コンストラクター関数と共に使用する。

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototypePerson.prototype.hello = function () {
    console.log("hello " + this.name);
}
// メソッドとして追加したいプロパティをprototypeオブジェクトに格納しておくことで、
// インスタンスごとにメソッドを出力することができる。

const bob = new Person("Bob", 18);
const tom = new Person("Tom", 33);
const sun = new Person("Sun", 25);

bob.hello();
tom.hello();