
function testHeadlinesHaveIDs() {
  var describe = "Headlines are clickable links with individual IDs"
  var expected = "<li><a href='#notes/0' id='0'>APRIL FOOL</a></li><li><a href='#notes/1' id='1'>SUN'S OUT: BRIGHTON WEEKENDER</a></li>";
  var feed = new Feed();
  feed.createArticle("APRIL FOOL", "Some content about April Fool's Day");
  feed.createArticle("SUN'S OUT: BRIGHTON WEEKENDER", "Some content about British summer finally arriving");
  var feedview = new FeedView(feed);
  assert.isEqual(feedview.displayHeadlines(), expected, describe);
}

// function testFeedView() {
//   var describe = "Feed view shows a feed with headlines upon instantiation";
//
//   var expected = "<li>HEADLINE</li>";
//   var feed = new Feed();
//   feed.createArticle("HEADLINE", "This is the article's summary content");
//   var feedView = new FeedView(feed);
//   assert.isEqual(feedView.displayHeadlines(), expected, describe);
// }




// testFeedView();
testHeadlinesHaveIDs();
