// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // var results = [];
  // var all = document.getElementsByTagName('*');
  // for (var i = 0; i < all.length; i++) {
  //   if ($(all[i]).hasClass(className)) {
  //     results.push(all[i]);
  //   }
  // }
  // return results;
  var results = [];
  var checkElement = function (element, className) {
    if (element.nodeName !== '#text') {
      if (element.classList.contains(className)) {
        results.push(element);
      }
      for (var i = 0; i < element.childNodes.length; i++) {
        checkElement(element.childNodes[i], className);
      }
    }
  };
  checkElement(document.body, className);
  return results;
};