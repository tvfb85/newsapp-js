(function(exports) {

  function Feed() {
    this.articles = [];
  }

  Feed.prototype.createArticle = function(headline, content) {
    article = new Article(headline, content);
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
