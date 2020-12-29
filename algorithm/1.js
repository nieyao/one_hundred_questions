// 循环迭代求和
// const sum = () => {
//   let s = 0;
//   for (let i = 1; i <= 100; i++) {
//     s += i;
//   }
//   return s;
// };

function sum(num1, num2) {
  var num = num1 + num2;
  if (num2 + 1 > 100) {
    return num;
  } else {
    return sum(num, num2 + 1);
  }
}

console.log(sum(1, 2), "s");
