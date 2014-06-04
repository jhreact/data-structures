var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create instance object with instance variables for storage and size
  var instance = { storage: {}, _size: 0 };
  // return instance object
  return _.extend(instance, stackMethods);
};

var stackMethods = {
  push: function (value) {
    this.storage[this._size++] = value;
  },
  pop: function() {
    // why can't we use the following to abbreviate:
    // var size = this._size;
    // var storage = this.storage;
    this._size && this._size--;
    var result = this.storage[this._size];
    delete this.storage[this._size];
    return result;
  },
  size: function () { return this._size; }
};


