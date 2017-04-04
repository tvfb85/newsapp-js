
(function(exports) {

  function FeedView(feed) {
    this.feed = feed;
  }

  FeedView.prototype.displayHeadlines = function() {
    var articles = this.feed.allArticles();
    var str = "";
    for(var i = 0; i < articles.length; i++){
      str += "<div class='feed'><a href='#articles/"+ i + "' id='"+ i + "'><img src='" + articles[i].seeThumbnail() + "'/>" + articles[i].seeHeadline() + "</a></div>";
}
return str;
  }

  exports.FeedView = FeedView;
})(this);
