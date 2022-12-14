// Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Charlie's Iterative solution

const leafList = (root) => {
    if (root === null) return [];

    let result = [];
    const stack = [ root ];

    while (stack.length > 0) {
        const current = stack.pop();

        if (current.left === null && current.right === null) {
            result.push(current.val);
        }

        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }

    return result;
}


// Charlie's recursive solution

const leafListRecursive = (root) => {
    let result = [];
    leafListHelper(root, result);
    return result;
}

const leafListHelper = (root, result) => {
    if (root === null) return;

    if (root.left === null && root.right === null) {
        result.push(root.val);
    }

    leafListHelper(root.left, result);
    leafListHelper(root.right, result);
}


const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(leafList(a)) // -> [ 'd', 'e', 'f' ] 
console.log(leafListRecursive(a));