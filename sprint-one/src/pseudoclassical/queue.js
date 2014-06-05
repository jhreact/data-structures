var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._size = 0;
  this._storage = {};
  this._index = 0;
};

Queue.prototype.size = function() {
  return this._size;
}

Queue.prototype.enqueue = function(value) {
  this._storage[this._index + this._size++] = value;
};