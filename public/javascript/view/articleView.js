(function(exports) {

  function ArticleView(article) {
    this.article = article;
  }

  ArticleView.prototype.displayArticleContent = function() {
    return "<h2>" + this.article.seeHeadline() + "</h2><span>" + this.article.seeContent() + "</span>";
  }

  exports.ArticleView = ArticleView;
})(this);
