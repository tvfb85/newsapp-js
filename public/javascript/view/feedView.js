(function(exports) {

  function FeedView(feed) {
    this.feed = feed;
  }

  FeedView.prototype.displayHeadlines = function() {
    var articles = this.feed.allArticles();
    var str = "";
    for(var i = 0; i < articles.length; i++){
      str += "<li>" + articles[i].seeHeadline() + "</li>";
}
return str;
  }

  exports.FeedView = FeedView;
})(this);
