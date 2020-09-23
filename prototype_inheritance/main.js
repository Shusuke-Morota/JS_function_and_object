
// プロトタイプ継承
// 別のコンストラクター関数のプロトタイプを受け継いで、機能を流用できるようにすること。

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prtototype.hello = function () {
    console.log("hello " + this.name);
}

// 日本人のオブジェクトを作るjapaneseというコンストラクターを作成したい
function Japanese(name, age) {
    this.name = name;
    this.age = age;
}

Person.prtototype.hello = function () {
    console.log("hello " + this.name);
}
// これだと重複しているし、メンテナンスもしにくい、、、

// 以下のように変更する

function Japanese(name, age) {
    Person.call(this, name, age);
}

// Person.prtototype.helloを継承する。

Japanese.prototype = Object.create(Person.prototype);

// ある関数のプロトタイプを別の関数のプロトタイプチェーンに追加することをプロトタイプ継承という。

const taro = new Japanese("Taro", 23);
console.log(taro);
