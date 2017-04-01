function testDisplayArticleSummary() {
  var describe = "Can display article content summary";

  var headline = "CRUMBS: The Short(bread) Straw";
  var expected = "Shortage of flour following Brexit causes decline in tea-time biscuits";
  var article = new Article(headline, expected);
  var actual = article.seeContent();
  assert.isEqual(actual, expected, describe);
}

function testDisplayArticleHeadline() {
  var describe = "Can display article headline";

  var expected = "CRUMBS: The Short(bread) Straw";
  var content = "Shortage of flour following Brexit causes decline in tea-time biscuits";
  var article = new Article(expected, content);
  var actual = article.seeHeadline();
  assert.isEqual(actual, expected, describe);
}

testDisplayArticleSummary();
testDisplayArticleHeadline();
