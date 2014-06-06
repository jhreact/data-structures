var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if (list.tail) {
      list.tail.next = node;
    }
    list.tail = node;
    if (!list.head) {
      list.head = list.tail;
    }
  };

  list.removeHead = function(){
    // if head exists
    //    get the value of next property from head
    //    update the list.head value
    var oldHead = list.head;
    if (list.head) {
      list.head = list.head.next;
    }
    return oldHead ? oldHead.value : oldHead;
  };

  list.contains = function(target){
    // start at head
    //    check head.value === target, if false update index to next, and repeat
    var index = list.head;
    if (index.value === target) {
      return true;
    }
    while (index.next || index.value === target) {
      if (index.value === target) {
        return true;
      }
      index = index.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
