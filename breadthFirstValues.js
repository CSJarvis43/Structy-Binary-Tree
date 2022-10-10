// pattern for traversing a binary tree horizontally

// Iterative

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


const breadthFirstValues = (root) => {
    if (root === null) return [];

    const queue = [ root ];
    let result = [];

    while (queue.length > 0) {
        const current = queue.shift();
        result.push(current.val);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return result;
}

// There is no real way to implement a recursive solution to a breadth-first traversal
// To do breadth-first, you need to use a queue of some sort, which does not work with recursion
// Recursion relies on the call stack, which is not something that gels with a queue data structure



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

console.log(breadthFirstValues(a))
//    -> ['a', 'b', 'c', 'd', 'e', 'f']