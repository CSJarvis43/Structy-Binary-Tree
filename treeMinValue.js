// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. 
// The function should return the minimum value within the tree.

// You may assume that the input tree is non-empty.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Charlie's Breadth Iterative


const treeMinValue = (root) => {
    //if (root === null) return null; <- not needed because we assume the input tree is non empty

    const queue = [ root ];
    let min = Infinity;

    while (queue.length > 0) {
        const current = queue.shift();
        if (current.val < min) min = current.val;

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return min;
}


// Charlie's Recursive

const treeMinValueRecursive = (root) => {
    if (root === null) return Infinity;
    
    const smallestLeft = treeMinValueRecursive(root.left);
    const smallestRight = treeMinValueRecursive(root.right);

    return Math.min(root.val, smallestLeft, smallestRight);
}


// Structy Iterative

const treeMinValueStructy = (root) => {
    const stack = [ root ];
    let smallest = Infinity;

    while (stack.length > 0) {
        const current = stack.pop();
        if (current.val < smallest) smallest = current.val;

        if (current.left !== null) stack.push(current.left);
        if (current.right !== null) stack.push(current.right);
    }

    return smallest;
}

// Structy Recursive




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

console.log(treeMinValue(a)) // -> -2
console.log(treeMinValueRecursive(a))