// Write a function, allTreePaths, that takes in the root of a binary tree. 
// The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.

// The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer array does not matter.

// You may assume that the input tree is non-empty.



class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


const allTreePaths = (root) => {
  if (root === null) return [];
  if (root.left === null && root.right === null) return [ [root.val] ];

  const leftPath = allTreePaths(root.left);
  const rightPath = allTreePaths(root.right);
  const result = [];

  for (path of leftPath) {
    result.push([root.val, ...path]);
  }

  for (path of rightPath) {
    result.push([root.val, ...path])
  }

  return result;
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

console.log(allTreePaths(a)) // ->
// [ 
//   [ 'a', 'b', 'd' ], 
//   [ 'a', 'b', 'e' ], 
//   [ 'a', 'c', 'f' ] 
// ] 