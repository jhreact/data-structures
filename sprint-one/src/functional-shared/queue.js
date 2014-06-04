var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = { storage: {}, _size: 0, index: 0 };

  return _.extend(instance, queueMethods);
};

var queueMethods = {
  size: function () { return this._size; }
};



