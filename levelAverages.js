// Write a function, levelAverages, that takes in the root of a binary tree that contains number values. 
// The function should return an array containing the average value of each level.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Charlie's Solution

const levelAverages = (root) => {
    const result = [];
    levelAveragesHelper(root, result, 0);

    for (let i = 0; i < result.length; i++) {
        let sum = result[i].reduce((a, b) => a + b, 0);
        result[i] = sum / result[i].length;
    }

    return result;
}

const levelAveragesHelper = (root, result, level) => {
    if (root === null) return;

    if (result.length === level) {
        result.push([root.val]);
    } else result[level].push(root.val);

    levelAveragesHelper(root.left, result, level + 1);
    levelAveragesHelper(root.right, result, level + 1);
}






const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(levelAverages(a)) // -> [ 3, 7.5, 1 ] 