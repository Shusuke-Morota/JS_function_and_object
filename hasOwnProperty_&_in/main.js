

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Object.prototypePerson.prototype.hello = function () {
    console.log("Object: hello " + this.name);
}

const bob = new Person("Bob", 18);
const result = bob.hasOwnProperty("name")
console.log(result);  // true

// personのオブジェクトに存在するかを確認するときに、hasOwnPropertyを使用する。


// inに関して

console.log("name" in bob); // true
// bobというオブジェクトのプロパティ、またはそのオブジェクトが保持している__proto__に
// 文字列のプロパティ、またはメソッドが格納されているかを確認する。（ここではname）