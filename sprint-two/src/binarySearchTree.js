var makeBinarySearchTree = function(value){
  var tree = Object.create(makeBinarySearchTree.methods);
  tree.left = undefined;
  tree.right = undefined;
  tree.value = value;
  return tree;
};

makeBinarySearchTree.methods = {};

makeBinarySearchTree.methods.insert = function(value) {
  if (value < this.value) {
    if (! this.left) {
      this.left = makeBinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (! this.right) {
      this.right = makeBinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

makeBinarySearchTree.methods.contains = function(value) {

};

makeBinarySearchTree.methods.depthFirstLog = function(callback) {

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
