// Stacks use LIFO algorithm unlike queues (FIFO)
// Can be implemented with Array or Linked List

let stack = [];

stack.push(65);
stack.push(10);

removeTop = function() {
    stack.pop();
}

console.log(stack);
removeTop();
console.log(stack)