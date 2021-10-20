// Queues use FIFO algorithm unlike Stacks (LIFO)
// Queues have fronts (elements added while enqueueing) and rears (elements removed while dequeueing)
// Like stacks, queues can be implemented with Array or Linked List

queue = [];

queue.push(95);
queue.push(20);

fIfO = function() {
    queue.shift();
    console.log(queue);
}

console.log(queue);
fIfO(queue);