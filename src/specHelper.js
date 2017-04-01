var assert = {

  testMessage: function(text, color) {
    li = document.createElement("li");
    li.innerHTML = text;
    li.style.color = color;
    document.getElementById('tests').appendChild(li);
  },

  isEqual: function(actual, expected) {
    if (actual !== expected) {
      text = "ASSERTION FAILED: " + actual + "**IS NOT EQUAL TO**" + expected;
      color = "red";
    }
    else {
      text = "TEST PASSED! " + actual + "**is equal to**" + expected;
      color = "green";
    }
    this.testMessage(text, color);
  }
}
