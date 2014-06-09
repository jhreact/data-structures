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
  var nodeList = _.keys(this.nodes);
  if (nodeList.length === 1) {
    firstNode = nodeList[0];
    this.nodes[newNode] = [firstNode];
    this.nodes[firstNode] = [newNode];
  } else {
    this.nodes[newNode] = toNode ? [toNode]: [];
  }
};

Graph.prototype.contains = function(node){
  return _.any(this.nodes, function(val, key) {
    return node === key;
  });
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  // Assumes we're not calling this on a node that doesn't exist
  return _.any(this.nodes[fromNode], function(node) {
    return node === toNode;
  });
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
