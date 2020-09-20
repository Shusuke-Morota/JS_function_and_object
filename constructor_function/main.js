
// コンストラクター関数とは
// 新しくオブジェクトを作成するための雛形となる関数

const obj = new A();
// newでオブジェクトを作成することをインスタンス化という。
// newで作成したオブジェクトをインスタンスと呼ぶ。



function Person(name, age) {
    this.name = name;
    this.age = age;
}
const bob = new Person("Bob", 18);
const tom = new Person("Tom", 33);
const sun = new Person("Sun", 25);


// インスタンス化したい際に格納したいプロパティを定義していく。(12、13行目)