// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
    return String(obj);
  }
  if (obj === undefined || obj.constructor === Function) {
    return;
  }
  if (obj.constructor !== Object && obj.constructor !== Array) {
    if (obj.constructor === String) {
      return "\"" + obj + "\""; // concatenates obj with parens
    }
    if (obj.constructor === Number) {
      return obj.toString();
    }
    return String(obj);
  }
  if (obj.constructor === Array) {
    var newStringArray = new Array();
    for (var i = 0; i < obj.length; i++) {
      newStringArray.push(stringifyJSON(obj[i]));
    }
    return "[" + newStringArray.join(",") + "]";
  }
  if (obj.constructor === Object) {
    var newStringArray = new Array();
    for (var key in obj) {
      if (obj[key] !== undefined && typeof(obj[key]) !== 'function') {
        newStringArray.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
      }
    }
    return "{" + newStringArray.join(",") + "}";
  }
};
