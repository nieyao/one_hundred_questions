/**
 * 求二叉树上任意两个节点的最短距离？
 * TreeNode:{
 *    this.left;
 *    this.right;
 *    this.parent;
 *    this.depth;
 * }
 * @param {TreeNode} a
 * @param {TreeNode} b
 * @returns
 */
var getShortDistance = function (a, b) {
  let aDis = 0;
  let bDis = 0;
  const handle = (a, b) => {
    if (!a || !b || a === b) {
      return;
    }

    if (a.depth > b.depth) {
      aDis++;
      handle(a.parent, b);
    }

    if (a.depth < b.depth) {
      bDis++;
      handle(a, b.parent);
    }

    if (a.depth === b.depth) {
      aDis++;
      bDis++;
      handle(a.parent, b.parent);
    }
  };
  handle(a, b);
  return aDis + bDis;
};
