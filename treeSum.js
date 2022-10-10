// Write a function that takes in the root of a binary tree that contains number values
// The function should return the total sum of all values in the tree


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Charlie's Depth Iterative


const treeSum = (root) => {
    if (root === null) return 0;

    const stack = [ root ];
    let result = 0;

    while (stack.length > 0) {
        const current = stack.pop();
        result += current.val;

        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }

    return result;
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

console.log(treeSum(a)) // -> 21