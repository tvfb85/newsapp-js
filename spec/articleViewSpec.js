function testSingleArticleContentView() {
  var describe = "Display content of a single article";
  var mockarticle = assert.createMock('article', 'seeContent', "On the sunniest day of the year so far, thousands flock to the seaside");
  var articleView = new ArticleView(mockarticle);
  var actual = articleView.fullArticleHTML();
  var expected = "<span>On the sunniest day of the year so far, thousands flock to the seaside</span>";
  assert.isEqual(actual, expected, describe);
}

testSingleArticleContentView();
