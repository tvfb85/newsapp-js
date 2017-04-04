(function(exports) {

  function Feed() {
    this.articles = [];
  }

  Feed.prototype.createArticle = function(headline, thumbnail, content) {
    article = new Article(headline, thumbnail, content);
    this._saveArticle(article);
  }

  Feed.prototype.allArticles = function() {
    return this.articles;
  }

  Feed.prototype._saveArticle = function(article) {
    this.articles.push(article);
  }

  exports.Feed = Feed;
})(this);
