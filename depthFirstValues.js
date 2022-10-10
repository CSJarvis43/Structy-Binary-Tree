// Depth First Values

// The first of the binary tree algorithms that we will look at
// A very basic pattern of one way to move through a binary tree

// Iterative solution

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstValues = (root) => {

    let result = [];
    const stack = [ root ];

    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.val);

        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }
    return result;

}


// Recursive

const depthFirstValuesRecursive = (root) => {

    if (root === null) return [];
    const leftValues = depthFirstValuesRecursive(root.left); //b, d, e
    const rightValues = depthFirstValuesRecursive(root.right); //c, f
    return [root.val, ...leftValues, ...rightValues] // a, b, d, e, c, f
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

console.log(depthFirstValuesRecursive(a))
//    -> ['a', 'b', 'd', 'e', 'c', 'f']