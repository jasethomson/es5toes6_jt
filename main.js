
function anomo1(param) {
  return param * 2;
}

// convert anomo to fat arrow function
//step1 remove function keyword
//step2 add arrow between param and {}
//if there is only exactly 1 parameter, you can get rid of the ()
//if function's sole action is to return, then remove the return keyword... and {}


var anomo2 = function(param){
  return param*2;
}
//step1 remove function keyword
//step2 add arrow between param and {}
var anomo3 = (param) => {
  return param * 2;
}
//if there is only exactly 1 parameter, you can get rid of the ()
var anomo4 = param => {
  return param * 2;
}
//if function's sole action is to return, then remove the return keyword... and {}
var anomo5 = param => param * 2;
