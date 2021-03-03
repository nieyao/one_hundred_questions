function flatten(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (Array.isArray(element)) {
      result = result.concat(flatten(element));
    } else {
      result = result.concat(element);
    }
  }
  return result;
}

console.log(flatten([1, 2, [3, [4, 5, [6, 7], 8], 9], 10]), "result");
