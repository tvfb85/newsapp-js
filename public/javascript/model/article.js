(function(exports) {

  function Article(headline, thumbnail, content) {
    this.headline = headline;
    this.thumbnail = thumbnail;
    this.content = content;
  }

  Article.prototype.seeHeadline = function() {
    return this.headline;
  };

  Article.prototype.seeThumbnail = function() {
    return this.thumbnail;
  };

  Article.prototype.seeContent = function() {
    return this.content;
  };

  exports.Article = Article;
})(this);
