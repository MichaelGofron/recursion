// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// should use:
// document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className
){
  // access document.body
  // check element.classList
  // continue checking element.childNodes and if contains classList
  // must recall getElementsByClassName
  var docBody = document.body;
  var classEls = [];
  var recursiveGetElByClassName = function(el){
    _.each(el.childNodes,function(ch){
      if (ch.nodeName != "#text"){ // must put some handling to check that it is not text
        if (ch.classList.contains(className)){
          classEls.push(ch);
        }
        recursiveGetElByClassName(ch);
      }
    });
  }
  // must access each child of docBody, see if they have className
  // and call getElementsByClassName on instance returning instances that follow the expected path
  recursiveGetElByClassName(docBody);
  return classEls;
};
