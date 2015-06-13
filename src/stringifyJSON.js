// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// Must use recursion on objects and arrays
// Then implement algorithm on the primitives
var stringifyJSON = function(obj) {
  // your code goes here
  if (Array.isArray(obj)){
    // perform on each element stringifyJSON
    var newObj = _.map(obj,stringifyJSON);
    return "[" + newObj + "]";
  }else if (typeof obj === 'object' && obj !== null){
    var newObj = [];
    for (var key in obj){
      if (stringifyJSON(obj[key])){
        var dictEl = stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
        newObj.push(dictEl);
      }
    }
    return "{" + newObj + "}";
  }else{ // primitive type, replace '' with "" then stringify
    if (typeof obj === "string"){ // string type
      return '\"' + obj + '\"'
    }
    if (typeof obj === "undefined" || typeof obj === "function"){
      return ""; // empty string on functions
    }
    return String(obj);
  }
};
