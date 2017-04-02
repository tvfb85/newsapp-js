var feedcontroller;

window.onload = function () {
  feedcontroller = new FeedController(new Feed());
  feedcontroller.addHTMLHeadlines();
};


window.onhashchange = function() {
  res = document.URL.split('#articles/')[1];
  feedcontroller.addHTMLContent(res);
};
