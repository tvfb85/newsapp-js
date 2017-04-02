var feedcontroller;

window.onload = function () {
  feedcontroller = new FeedController(new Feed());
  feedcontroller.addHTMLHeadlines();
};
