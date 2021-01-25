function dfs(A, start, d) {
  if (start + 1 >= A.length) return;
  const [depth, v] = [A[start], A[start + 1]];
  if (d[depth - 1] == void 0) {
    d[depth - 1] = {};
  }
  let next = {};
  if (
    start + 2 >= A.length ||
    (start + 2 < A.length && A[start + 2] < A[start])
  )
    next = null;
  d[depth - 1][v] = next;
  d[depth] = next;
  dfs(A, start + 2, d);
}

function deserialization(A) {
  const d = {};
  dfs(A, 0, d);
  return d;
}

console.log(
  deserialization([0, "a", 1, "b", 2, "c", 3, "e", 2, "d", 1, "x", 0, "ff"])
);
// const result = {
//   a: {
//     b: {
//       c: {
//         e: null
//       },
//       d: null
//     },
//     x: null
//   },
//   ff: null
// };
