(function(exports) {

  function Article(headline, content) {
    this.headline = headline;
    this.content = content;
  }

  Article.prototype.seeContent = function() {
    return this.content;
  };

  Article.prototype.seeHeadline = function() {
    return this.headline;
  };

  exports.Article = Article;
})(this);
