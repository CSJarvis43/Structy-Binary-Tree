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


// Charlie's Iterative Depth solution

const levelAveragesDepth = (root) => {
    if (root === null) return [];

    let result = [];
    const stack = [ {node: root, level: 0} ];

    while (stack.length > 0) {
        const { node, level } = stack.pop();

        if (result.length === level) {
            result.push([ node.val ]);
        } else {
            result[level].push(node.val);
        }

        if (node.left) stack.push({ node: node.left, level: level + 1 });
        if (node.right) stack.push({ node: node.right, level: level + 1 });
    }

    for (let i = 0; i < result.length; i++) {
        const sum = result[i].reduce((a, b) => a + b, 0);
        result[i] = sum / result[i].length;
    }

    return result;
}


// Structy Recursive solution

const levelAveragesStructy = (root) => {
    const levels = [];
    fillLevels(root, levels, 0);

    return levels.map(arr => getAvg(arr));
}

const getAvg = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

const fillLevels = (root, levels, levelNum) => {
    if (root === null) return;

    if (levels.length === levelNum) {
        levels.push([ root.val ]);
    } else {
        levels[levelNum].push(root.val);
    }

    fillLevels(root.left, levels, levelNum + 1);
    fillLevels(root.right, levels, levelNum + 1);
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
console.log(levelAveragesDepth(a))
console.log(levelAveragesStructy(a))