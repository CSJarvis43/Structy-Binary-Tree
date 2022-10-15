// Write a function, maxPathSum, that takes in the root of a binary tree that contains number values. 
// The function should return the maximum sum of any root to leaf path within the tree.

// You may assume that the input tree is non-empty.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Not a functioning solution, unsure how to solve iteratively


// const maxPathSum = (root) => {
//     const stack = [ root ];
//     let maxSum = 0;

//     while (stack.length > 0) {
//         const current = stack.pop();
//         let pathSum = 0;
    
    
//         if (pathSum > maxSum) maxSum = pathSum;
//     }

//     return sum;
// };


const maxPathSumRecursive = (root) => {
    if (root === null) return -Infinity;
    if (root.left === null && root.right === null) return root.val;

    const leftValues = maxPathSumRecursive(root.left);
    const rightValues = maxPathSumRecursive(root.right);

    return leftValues > rightValues ? root.val + leftValues : root.val + rightValues;
}


const maxPathSumStructy = (root) => {
    if (root === null) return -Infinity;
    if (root.left === null && root.right === null) return root.val;
    const maxChild = Math.max(maxPathSumStructy(root.left), maxPathSumStructy(root.right));
    return root.val + maxChild;
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

console.log(maxPathSumRecursive(a)) // -> 18
console.log(maxPathSumStructy(a))