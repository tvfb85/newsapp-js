(function(exports) {

  function FeedController(feed) {
    this.feed = feed;
    this.feed.createArticle("APRIL FOOL", "Best of today's fake stories");
    this.feedview = new FeedView(this.feed);
  };

  FeedController.prototype.addHTMLHeadlines = function(){
    document.getElementById('app').innerHTML = this.feedview.displayHeadlines();
  };

    exports.FeedController = FeedController;
})(this);
