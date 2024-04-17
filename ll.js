class LinkedList {
  /*
    singly linked list
    properties:
        length: int
        head: Node Object / null
    methods:
        insertFirst(value) -> no return
        insertLast(value) -> no return
        deleteFirst() -> no return
        deleteLast() -> no return
        getLength() -> int
        isEmpty() -> bool
    */
  constructor() {
    //setup vars
    this.length = 0;
    this.head = null;
  }
  insertFirst(value) {
    //increase length
    this.length++;
    //if there is something there make a new node with the value and next node as the current head
    if (!this.isEmpty()) {
      let newNode = new Node(value, this.head);
      this.head = newNode;
    } else {
      // otherwise make a new node and set it as the head / tail
      let newNode = new Node(value);
      this.head = newNode;
    }
  }
  insertLast(value) {
    //go through each node until the one were on is pointing to null then insert between :)
    this.length++;
    //if empty just make new one and put it in the head
    if (this.isEmpty()) {
      this.head = new Node(value);
    } else {
      //go through each node until the next "pointer" is null then replace the null "pointer" to the new node
      let currentNode = this.head;
      while (currentNode.getNext() !== null) {
        currentNode = currentNode.getNext();
      }
      currentNode.setNext(new Node(value));
    }
  }
  deleteFirst() {
    //decrement length
    this.length--;
    //if there is something then put the head to the current heads next node
    if (this.head !== null) {
      this.head = this.head.getNext();
    }
  }
  deleteLast() {
    this.length--;
    //if there is something goto the node that its next "points" to null
    if (!this.isEmpty()) {
      let currentNode = this.head;
      while (currentNode.getNext().getNext() !== null) {
        currentNode = currentNode.getNext();
      }
      currentNode.setNext();
    }
  }
  getLength() {
    //read it
    return this.length;
  }
  isEmpty() {
    //read it
    return this.head === null;
  }
}

class Node {
  /*
    simple node object,
    makes empty node,
    Properties:
        value: any
        next: Node Object / null
    methods:
        setValue(value) -> no return
        getValue() -> value
        setNext() -> no return
        getNext() -> Node Object / null
    */
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
  setValue(value) {
    this.value = value;
  }
  getValue() {
    return this.value;
  }
  setNext(next = null) {
    this.next = next;
  }
  getNext() {
    return this.next;
  }
}

module.exports = { LinkedList };
