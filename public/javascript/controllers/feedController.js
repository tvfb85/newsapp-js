(function(exports) {


  function FeedController(feed) {
    this.feed = feed;
    this.feedview = new FeedView(this.feed);
    // this.requestNewsFeed();
  };


  FeedController.prototype.requestNewsFeed = function() {

    var xhttp = new XMLHttpRequest();
    // var params = "q=cats&format=json&show-fields=headline,body,thumbnail,short-url&order-by=newest&callback=onreadystatechange";
    xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=headline,body,thumbnail,short-url", false);
    xhttp.send();

    var response = JSON.parse(xhttp.responseText);
    var results = response["response"]["results"];
      for(var i = 0; i < results.length; i++) {
          var headline = results[i].fields["headline"];
          var thumbnail = results[i].fields["thumbnail"];
          var body = results[i].fields["body"];
          this.feed.createArticle(headline, thumbnail, body);
      }
      console.log(this.feed);

}

  //   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //   xhttp.onreadystatechange = function() {
  //
  //     if(xhttp.readyState == 4 && xhttp.status == 200) {
  //         var response = JSON.parse(xhttp.response);
  //         var results = response["response"]["results"];
  //         for(var i = 0; i < results.length; i++) {
  //             var headline = results[i].fields["headline"];
  //             var body = results[i].fields["body"];
  //             this.feed.createArticle(headline, body);
  //         }
  //       }
  // };
  // console.log(headline)
  //   xhttp.send();
  //   // var response = JSON.parse(xhttp.response);
  //   // var results = response["response"]["results"];
  //   // console.log(xhttp);
  //   // for(var i = 0; i < results.length; i++) {
  //   //     var headline = results[i].webTitle;
  //   //     this.feed.createArticle(headline, "some content");
  //   // }
  // }

  // FeedController.prototype.createArticleFromFeed = function(headline, body) {
  //   this.feed.createArticle(headline, thumbnail, body);
  // }
FeedController.prototype.date = function(){
n =  new Date();
// y = n.getFullYear();
// m = n.getMonth() + 1;
// d = n.getDate();
document.getElementById("date").innerHTML = n.toDateString();
}

  FeedController.prototype.addHTMLHeadlines = function(){
    document.getElementById('app').innerHTML = this.feedview.displayHeadlines();
  };

  FeedController.prototype.addHTMLContent = function(index){

    articleview = new ArticleView(this.feed.allArticles()[index]);
    console.log(articleview);
    document.getElementById('article-content').innerHTML = articleview.displayArticleContent();
  };

    exports.FeedController = FeedController;
})(this);
