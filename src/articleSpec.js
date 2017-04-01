function testDisplayArticleSummary() {
  // var headline = "CRUMBS: The Short(bread) Straw";
  var expected = "Shortage of flour following Brexit causes decline in tea-time biscuits";
  var article = new Article(expected)
  var actual = article.seeSummary();
  assert.isEqual(actual, expected);
}

testDisplayArticleSummary();
