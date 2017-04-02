(function(exports) {

  function FeedView(feed) {
    this.feed = feed;
  }

  FeedView.prototype.displayHeadlines = function() {
    var articles = this.feed.allArticles();
    var str = "";
    for(var i = 0; i < articles.length; i++){
      str += "<li><a href='#articles/"+ i + "' id='"+ i + "'>" + articles[i].seeHeadline() + "</a></li>";
}
return str;
  }

  exports.FeedView = FeedView;
})(this);
