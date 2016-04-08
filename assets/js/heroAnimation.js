var vote2016 = vote2016 || {};

var words = ["startups.", "acceleration.", "innovation.", "leadership."],
    i = 0;


vote2016.heroAnimation = {

  textChange: function() {
    $(".who").fadeOut(function(){
      $(".who").text(words[i=(i+1)%words.length]);
      $(".who").fadeIn();
    });
  }
};

$(document).ready(function(){
  setInterval(function () {
    vote2016.heroAnimation.textChange();
  }, 2250);
});
