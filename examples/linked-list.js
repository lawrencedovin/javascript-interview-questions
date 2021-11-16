class LinkedList {

    constructor(head=null, tail=null) {
        this.head = head;
        this.tail = tail;
    }

    printNodes() {
        let currentNode = this.head;
        while(currentNode) {
            console.log(`${currentNode.value}`);
            currentNode = currentNode.next;
        }
    }

    push(value) {
        let newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        console.log(`Pushed new Node: ${newNode.value}`);
    }
}

class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next  = next;
    }
}


// Beetle (head) -> Bee -> Grasshopper (tail)
let grasshopper = new Node('grasshopper');
let bee = new Node('bee', grasshopper);
let beetle = new Node('beetle', bee)

let insects = new LinkedList(beetle, grasshopper);

insects.push('praying mantis');

insects.printNodes();