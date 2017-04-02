function testControllerCanBeInstantiated(){
  var describe = "Feed controller can be instantiated";
  var feedcontroller = new FeedController(new Feed());
  assert.isInstanceOf(feedcontroller, FeedController, describe);
}

function testControllerInsertsHTML(){
  var describe = "Test that the controller inserts HTML headlines into DOM";

  var initialDOMGetElementByID = document.getElementById;
  var mockarticle = assert.createMock('article', 'seeHeadline', "Sun's out: Thousands flock to Brighton");
  var mockfeed = assert.createMock('feed', 'allArticles', [mockarticle]);
  mockfeed['createArticle'] = function(){};
  var dummyElement = document.createElement('div');
  document['getElementById'] = function(){return dummyElement;};
  var feedcontroller = new FeedController(mockfeed);

  feedcontroller.addHTMLHeadlines();
  actual = dummyElement.innerText;
  expected = "Sun's out: Thousands flock to Brighton";
  document.getElementById = initialDOMGetElementByID;
  assert.isEqual(actual, expected, describe);
}


testControllerCanBeInstantiated();
testControllerInsertsHTML();
