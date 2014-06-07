var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[i]) {
    this._storage[i] = [];
  }
 this._storage[i].push([k,v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result;
  this._storage[i].forEach(function(value, index, collection) {
    if ( value[0] === k ) {
      result = value[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i].forEach(function(value, index, collection) {
    if (value[0] === k) {
      // collection[index] = null;
      value[1] = null;
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
