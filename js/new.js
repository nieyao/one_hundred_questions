function _new(constructor, ...arguments) {
  var obj = Object.create(constructor.prototype);
  const ret = constructor.apply(obj, arguments);
  return typeof ret === "object" ? ret : obj;
}
