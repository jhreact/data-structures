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
    if (list.head) {
      list.head = list.head.next;
    }
  };

  list.contains = function(target){
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
