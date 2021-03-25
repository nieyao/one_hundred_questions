/**
 * 将一个数组转成树状的对象
 * @param {Array} arr
 */
function transformArrayToTree(arr) {
  if (!arr || !(arr instanceof Array)) return "错误的数据类型";
  if (!arr.length) return "空数组";
  var len = arr.length;
  var rootObj = { id: null, name: null, children: [] };
  var nodeObj = {};
  for (var i = 0; i < len; i++) {
    let parentId = arr[i].parentId;
    if (!parentId) {
      rootObj = {
        id: arr[i].id,
        name: arr[i].name,
        children: [],
      };
    } else {
      if (nodeObj.hasOwnProperty(parentId)) {
        nodeObj[parentId].children.push(arr[i]);
      } else {
        nodeObj[parentId] = {};
        nodeObj[parentId].children = [];
        nodeObj[parentId].children.push(arr[i]);
      }
    }
  }
  // 整理根节点过程
  function getChildren(node) {
    let temp = nodeObj[node.id];
    if (temp && temp.children) {
      node.children = temp.children;
      delete temp;
      var len = node.children.length;
      if (len > 0) {
        for (var i = 0; i < len; i++) {
          getChildren(node.children[i]);
        }
      }
    } else if (!temp) {
      node.children = [];
      console.log(node.id + "没有children");
    }
  }
  getChildren(rootObj);
  for (var p in nodeObj) {
    if (nodeObj.hasOwnProperty(p)) {
      console.warn(p + ":没有该父节点");
    }
  }
  return rootObj;
}

let arr = [
  { id: 1, name: "i1" },
  { id: 2, name: "i2", parentId: 1 },
  { id: 4, name: "i4", parentId: 3 },
  { id: 3, name: "i3", parentId: 2 },
];

const obj = transformArrayToTree(arr);
// 输入 1
console.log(obj);
