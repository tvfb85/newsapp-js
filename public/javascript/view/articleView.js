(function(exports) {

  function ArticleView(article) {
    this.article = article;
  }

  ArticleView.prototype.displayArticleContent = function() {
    return "<span>" + this.article.seeContent() + "</span>";
  }

  exports.ArticleView = ArticleView;
})(this);
