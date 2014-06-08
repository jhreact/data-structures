var Node = function(value, edge) {
  this.value = value;
  this.edge = edge;
};

var Graph = function(){
  this.nodes = [];
  this.edges = undefined;
};

Graph.prototype.addNode = function(newNode, toNode){
  // here, newNode is actually a value, which we shove inside a Node object
  var node = new Node(newNode);
  this.nodes.push(node);
};

Graph.prototype.contains = function(node){
  return _.any(this.nodes, function(graphNode) {
    return graphNode.value === node;
  });
};

Graph.prototype.removeNode = function(node){
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
