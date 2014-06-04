var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // create index for pointing to next in queue
  var index = 0;
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size++] = value;
  };

  someInstance.dequeue = function(){
    var result = storage[index++];
    delete storage[index - 1];
    size--;
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
