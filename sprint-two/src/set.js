var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  // initialize storage if undefined, {}
  // if storage is an object use item as a key for lookup
  if (!this._storage) {
    this._storage = {};
  }
  this._storage[item] = true;
};

setPrototype.contains = function(item){
  if (!this._storage) {
    return false;
  }
  return !!this._storage[item];
};

setPrototype.remove = function(item){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
