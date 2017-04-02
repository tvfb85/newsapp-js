(function(exports) {

  function ArticleView(article) {
    this.article = article;
  }

  ArticleView.prototype.fullArticleHTML = function() {
    return "<span>" + this.article.seeContent() + "</span>";
  }

  exports.ArticleView = ArticleView;
})(this);
