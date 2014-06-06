var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  return _.extend(newTree, treeMethods);
};




var treeMethods = {};

treeMethods.addChild = function(value){
  if (!this.children) {
   this.children = [];
  }
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  // need start off with top node
  // check if node matches target, return if true
  // if no children return false
  // iterate over children
  //    use contains as the iterator
  //    use any for main iterator
  var node = this;
  if (node.value === target) {
    return true;
  } else if (!node.children) {
    return false;
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
