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
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (! this.left) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else {
    if (! this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
};

makeBinarySearchTree.methods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
