function testAddArticleToFeed(){
  var describe = "Articles can be added to the feed"
  var feed = new Feed();
  feed.createArticle("HEADLINE", "This is the displayed summary");
  assert.isTrue(feed.allArticles().length === 1, describe);
}

testAddArticleToFeed();
