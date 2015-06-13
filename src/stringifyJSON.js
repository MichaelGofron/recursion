// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// Must use recursion on objects and arrays
// Then implement algorithm on the primitives
var stringifyJSON = function(obj) {
  // your code goes here
  if (Array.isArray(obj)){
    // perform on each element stringifyJSON
    obj = _.map(obj,stringifyJSON);
    return "[" + obj + "]";
  }else if (typeof obj === 'object' && obj !== null){
    console.log("object");
  }else{ // primitive type, replace '' with "" then stringify
    if (typeof obj === "string"){ // string type
      return '\"' + obj + '\"'
    }
    return String(obj);
  }
};