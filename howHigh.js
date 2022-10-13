// Write a function, howHigh, that takes in the root of a binary tree. 
// The function should return a number representing the height of the tree.

//The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.

// If the tree is empty, return -1.


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Charlie's Recursive

const howHigh = (root) => {

    if (root === null) return -1;

    const leftPath = howHigh(root.left);
    const rightPath = howHigh(root.right);

    if (leftPath >= rightPath) {
        return 1 + leftPath;
    } else if (rightPath > leftPath) {
        return 1 + rightPath;
    }


}

// Structy Recursive 

const howHighStructy = (node) => {
    if (node === null) return -1;

    const leftTreeHeight = howHighStructy(node.left);
    const rightTreeHeight = howHighStructy(node.right);

    return Math.max(leftTreeHeight, rightTreeHeight) + 1;
}


// Iterative Attempt

const howHighIterative = (root) => {
    if (root === null) return -1;

    const stack = [ root ];
    let count = 0;
    let runningCount = 0;

    while (stack.length > 0) {
        const current = stack.pop();
        if (current.right) {
            runningCount++;
            stack.push(current.right);
        } else if (current.left) {
            runningCount++;
            stack.push(current.left);
        } else runningCount = 0;

        if (runningCount > count) count = runningCount;
    }

    return count;
}



const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

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

console.log(howHigh(a)) // -> 2
console.log(howHighStructy(a))
console.log(howHighIterative(a))