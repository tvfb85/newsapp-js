var assert = {

  testMessage: function(text, color) {
    li = document.createElement("li");
    li.innerHTML = text;
    li.style.color = color;
    document.getElementById('tests').appendChild(li);
  },

  isEqual: function(actual, expected, testName) {
    if (actual !== expected) {
      text = "ASSERTION FAILED:  <span style='color:black'>" + testName + "</span><br>" + actual + " IS NOT EQUAL TO" + expected;
      color = "red";
    }
    else {
      text = "TEST PASSED!  <span style='color:black'>" + testName + "</span><br>";
      color = "green";
    }
    this.testMessage(text, color);
  },

    isTrue: function(assertionToCheck, testName) {
    if(!assertionToCheck){
      text = "ASSERTION FAILED:  <span style='color:black'>" + testName + "</span><br>" + assertionToCheck + " IS NOT TRUTHY";
      color = "red"
    }
    else {
      text = "TEST PASSED!  <span style='color:black'>" + testName + "</span><br>";
      color = "green";
    }
    this.testMessage(text, color);
  },

  isInstanceOf: function(object, Constructor, testName){
    if(object.constructor !== Constructor){
      text = "COMPARISON FAILED: " + object + "** is not an instance of.** " + Constructor;
      color = "red";
    }
    else {
      text = "TEST PASSED! <span style='color:black'>" + testName + "</span><br>" + object + " **is an instance of** " + Constructor.name;
      color = "green";
    }
    this.testMessage(text, color);
  },

  createMock: function(name, method, returns){
    var obj = {};
    obj[name] = name;
    obj[method] = function(){return returns;};
    return obj;
  }

}
