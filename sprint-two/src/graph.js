var Graph = function(){
  // Assumes node values will be unique
  // Ideally, we'd have a separate node class that could be reused across
  // multiple datatypes, but that's a bit overzealous at the current time.
  // We'll make the edges a node property instead of an inherent property of
  // the graph
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  // Assumes addNode will not be called on existing nodes
  this.nodes[newNode] = toNode ? [toNode]: [];
};

Graph.prototype.contains = function(node){
  return _.any(this.nodes, function(val, key) {
    return node === key;
  });
};

Graph.prototype.removeNode = function(node){
  for (var i=0; i < this.nodes.length; i++) {
    testNode = this.nodes[i];
    if (testNode.value === node) {
      delete this.nodes[i];
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  //for (var i=0; i <
  return fromNode.connectedTo.value === toNode;
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
