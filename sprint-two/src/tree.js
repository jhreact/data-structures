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

treeMethods.contains = function(target, node){
  node = node || this;
  if (node.value === target) {
    return true;
  } else if (!node.children) {
    return false;
  } else {
    return _.any(node.children, function(child) {
      return child.contains(target, child);
    });
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
