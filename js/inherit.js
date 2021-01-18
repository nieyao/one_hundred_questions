// 1. 原型链继承
// function Father() {
//   this.name = "parent";
//   this.friend = [];
//   this.property = true;
// }

// Father.prototype.getName = function () {
//   return this.name;
// };

// Father.prototype.getParentValue = function () {
//   return this.property;
// };

// function Son(name, age) {
//   this.name = name;
//   this.age = age;
//   this.SonProperty = false;
// }

// Son.prototype = new Father();

// Son.prototype.constructor = Son;

// test
// const child = new Son("xiaoming", 12);
// console.log(child.getName(), "childName");
// console.log(child instanceof Father, "true is ok");
// console.log(Son.prototype.constructor === Son, "true is ok");

// 借用构造函数继承
// function Father(name, age) {
//   this.name = name;
//   this.age = age;
// }

// function Son(name, age, job) {
//   Father.call(this, name, age);
//   this.job = job;
// }

// const son = new Son("xiaoming", 22, "前端开发");
// console.log(son.name, "name");
// console.log(son instanceof Son, "true is ok");
// console.log(son instanceof Father, "false is ok");
// console.log(Son.prototype.constructor === Son, "true is ok");

// 组合继承（原型 + 借用构造）

// function Father(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sex = "man";
// }

// Father.prototype.getFatherName = function () {
//   console.log("父类的方法");
// };

// function Son(name, age, job) {
//   Father.call(this, name, age); // 第二次调用:创建子类型实例的时候
//   this.job = job;
// }

// Son.prototype = new Father();
// Son.prototype.constructor = Son;
// var son = new Son("jacky", 22, "前端开发");
// son.getFatherName();
// console.log(son, "son");
// console.log(son instanceof Son, "true is ok");
// console.log(Son.prototype.constructor === Son, "true is ok");

// 原型式继承

/* Object.create() 的实现原理 */
// cloneObject()对传入其中的对象执行了一次浅拷贝，将构造函数F的原型直接指向传入的对象。
// function cloneObject(obj) {
//   function F() {}
//   F.prototype = obj; // 将传进来obj对象作为空函数的prototype
//   return new F(); // 此对象的原型为被继承的对象, 通过原型链查找可以拿到被继承对象的属性
// }

// var father = {
//   name: "jacky",
//   age: 22,
//   courses: ["前端"],
// };

// // var son1 = Object.create(father); // 效果一样
// var son1 = cloneObject(father);
// son1.courses.push("后端");

// var son2 = cloneObject(father);
// son2.courses.push("全栈");

// console.log(father.courses); //  ["前端", "后端", "全栈"]

// 寄生式继承
// function createAnother(obj) {
//   const clone = Object.create(obj);
//   obj.skill = function () {
//     console.log("run");
//   };
//   return clone;
// }

// const animal = {
//   eat: "food",
//   drink: "water",
// };

// const dog = createAnother(animal);
// dog.skill();

// 寄生组合式继承
// function Father(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Father.prototype.getFatherName = function () {
//   console.log("父类的方法");
// };

// function Son(name, age, job) {
//   Father.call(this, name, age); // 借用构造继承: 继承父类通过this声明属性和方法至子类实例的属性上
//   this.job = job;
// }

// function inheritPrototype(son, father) {
//   const clone = Object.create(father.prototype);
//   clone.constructor = son; // 增强对象，弥补因重写原型而失去的默认的constructor 属性
//   son.prototype = clone; // 指定对象，将新创建的对象赋值给子类的原型
// }

// inheritPrototype(Son, Father);

// // 新增子类原型属性
// Son.prototype.getSonName = function () {
//   console.log("子类的方法");
// };

// var son = new Son("jacky", 22, "前端开发");
// console.log(son);

// 实现inherit
function merge(target, source) {
  for (var key in source) {
    if (!target.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
}
function inherit(Fn, obj) {
  function Class() {
    Fn.call(this, ...arguments);
  }
  const clone = Object.create(Fn.prototype);
  clone.constructor = Class; // 增强对象，弥补因重写原型而失去的默认的constructor 属性
  Class.prototype = clone; // 指定对象，将新创建的对象赋值给子类的原型
  merge(Class.prototype, obj);
  return Class;
}

let animalNum = 0;
function Animal(name) {
  animalNum++;
  this.name = name;
}
Animal.prototype.getName = function () {
  return this.name;
};
const Cat = inherit(Animal, {
  say: function () {
    console.log(`NO${animalNum}:${this.getName()}`);
  },
});
const cat1 = new Cat("小花");
console.log(cat1, "cat1");
cat1.say(); // NO1:小花
