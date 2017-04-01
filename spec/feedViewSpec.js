function testFeedView() {
  var describe = "Feed view shows a feed with headlines upon instantiation";

  var expected = "<li>HEADLINE</li>";
  var feed = new Feed();
  feed.createArticle("HEADLINE", "This is the article's summary content");
  var feedView = new FeedView(feed);
  assert.isEqual(feedView.displayHeadlines(), expected, describe);
}

testFeedView();
