var assert = {

  testMessage: function(text, color) {
    li = document.createElement("li");
    li.innerHTML = text;
    li.style.color = color;
    document.getElementById('tests').appendChild(li);
  },

  isEqual: function(actual, expected, testName) {
    if (actual !== expected) {
      text = "ASSERTION FAILED:  <span style='color:black'>" + testName + "</span><br>" + actual + "IS NOT EQUAL TO" + expected;
      color = "red";
    }
    else {
      text = "TEST PASSED!  <span style='color:black'>" + testName + "</span><br>";
      color = "green";
    }
    this.testMessage(text, color);
  }
}
