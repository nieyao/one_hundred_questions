function _new(constructor, ...arguments) {
  var obj = Object.create(constructor.prototype);
  const ret = constructor.apply(obj, arguments);
  return typeof ret === "object" ? ret || obj : obj;
}

// 测试
function Otaku(name, age) {
  this.strength = 60;
  this.age = age;

  return {
    name: name,
    habit: "Games",
  };
}

var person = _new(Otaku, "Kevin", "18");

console.log(person.name); // Kevin
console.log(person.habit); // Games
console.log(person.strength); // undefined
console.log(person.age); // undefined
