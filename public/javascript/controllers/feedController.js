(function(exports) {
  var title;
  var content;

  function FeedController(feed) {
    this.feed = feed;
    this.feedview = new FeedView(this.feed);
  };

  FeedController.prototype.requestNewsFeed = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=cats&format=json&show-fields=starRating,headline,body,byline,trailText,thumbnail,short-url&order-by=newest", false);
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    var results = response["response"]["results"];
    console.log(response);
    for(var i = 0; i < results.length; i++) {
        var headline = results[i].webTitle;
        this.feed.createArticle(headline, "some content");
    }
  }

  FeedController.prototype.addHTMLHeadlines = function(){
    document.getElementById('app').innerHTML = this.feedview.displayHeadlines();
  };

  FeedController.prototype.addHTMLContent = function(index){
    articleview = new ArticleView(this.feed.allArticles()[index]);
    document.getElementById('app').innerHTML = articleview.displayArticleContent();
  };

    exports.FeedController = FeedController;
})(this);
