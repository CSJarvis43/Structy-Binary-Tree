// Write a function, bottomRightValue, that takes in the root of a binary tree. 

// The function should return the right-most value in the bottom-most level of the tree.

//You may assume that the input tree is non-empty.


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}




const bottomRightValue = (root) => {
    const queue = [ root ];
    const results = [];

    while (queue.length > 0) {
        const current = queue.shift();
        results.push(current.val);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return results.slice(-1)[0];
}


const bottomRightValueStructy = (root) => {
    const queue = [ root ];
    let current = null;

    while (queue.length > 0) {
        current = queue.shift();
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return current.val;

}


const a = new Node(3);
const b = new Node(11);
const c = new Node(10);
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
//   11     10
//  / \      \
// 4   -2     1

console.log(bottomRightValue(a)) // -> 1