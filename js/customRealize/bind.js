// 手写 bind

/**
 * bind:创建一个新的函数，在 bind() 被调用的时，新函数的 this 被指定为bind()的第一个参数，其余参数将作为新函数的参数被调用
 */

Function.prototype.myBind = function (context, ...args1) {
  const self = this;
  console.log(this, context, "this");
  return function (...args2) {
    return self.call(context, ...args1, ...args2);
  };
};

let value = 2;
let foo = {
  value: 1,
};
function bar(name, age) {
  return {
    value: this.value,
    name: name,
    age: age,
  };
}

const test1 = bar.call(foo, "Jack", 20); // 直接执行了函数
console.log(test1); // {value: 1, name: "Jack", age: 20}

let bindFoo1 = bar.myBind(foo, "Jack", 20); // 返回一个函数
const test2 = bindFoo1();
console.log(test2); // {value: 1, name: "Jack", age: 20}

let bindFoo2 = bar.myBind(foo, "Jack"); // 返回一个函数
const test3 = bindFoo2(20);
console.log(test3); // {value: 1, name: "Jack", age: 20}
