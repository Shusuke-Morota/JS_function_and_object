
// new

function F(a, b) {
    this.a = a;
    this.b = b;
    return {};
}

F.prototype.c = function () { }

function newOpe(c, ...args) {
    const _this = Object.create(c.prototype);
    C.apply(_this, args);
    console.log(_this);
}

const instance = newOpe(F, 1, 2);
console.log(instance)