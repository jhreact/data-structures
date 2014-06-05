var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue._size = 0;
  newQueue._storage = {};
  newQueue._index = 0;
  return newQueue;
};

var queueMethods = {
  size: function() { return this._size; },
  enqueue: function(value) {
    this._storage[this._index + this._size++]  = value;
  }
};


