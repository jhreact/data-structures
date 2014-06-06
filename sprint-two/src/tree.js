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

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
