// 循环迭代求和
// const sum = () => {
//   let s = 0;
//   for (let i = 1; i <= 100; i++) {
//     s += i;
//   }
//   return s;
// };

// function sum(num1, num2) {
//   var num = num1 + num2;
//   if (num2 + 1 > 100) {
//     return num;
//   } else {
//     return sum(num, num2 + 1);
//   }
// }

const sum = (number) => {
  if (number === 1 || number === 0) {
    return number;
  }
  return sum(number - 1) + number;
};

console.log(sum(100), "s");
