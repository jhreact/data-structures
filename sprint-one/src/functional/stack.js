var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // need a size data structure
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
    // add new items to that stack
    //    increment the size property after adding
    //    add value using a number key
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
  };

  someInstance.size = function(){
    // return size of stack
    return size;
  };

  return someInstance;
};