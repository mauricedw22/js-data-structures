
class Node {
    constructor(data,metadata){
        this.data = data;
        this.metadata = metadata;
        this.next = null;
    }
}

const head = new Node(12,'This is sample data.');
//console.log(head);

head.next = new Node(45,'More random shit.');
console.log(head) // head.next.next