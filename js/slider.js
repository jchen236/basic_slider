var sliderInt = 0;
var sliderNext = 1;

var count = 0;

function startSlider() {
  count = $("#slider > img").length;
  console.log(count);

  loop = setInterval(function() {
    $("#slider > img").fadeOut(400);
    $("#slider > #img" + sliderNext).fadeIn(400);
    sliderInt = sliderNext;
    sliderNext = (sliderNext + 1)%count;
  }, 4000);
}

$(document).ready(function() {
  $("#slider > #img0").fadeIn(400);
  startSlider();
});



function stopLoop() {
  console.log("loop stopping")
  window.clearInterval(loop);
}

function showSlide(id) {
  stopLoop();
id = (id + 4)%count


  $("#slider > img").fadeOut(300);
  $("#slider > #img" + id).fadeIn(300);
  sliderInt = id;
  sliderNext = (id + 1)%count;
  startSlider();
}

function prev() {
  var newSlide = sliderInt-1;
  showSlide(newSlide);
}

function next() {
  var newSlide = sliderInt + 1;
  showSlide(newSlide);
}

$(document).on("mouseenter", "img", function() {
           stopLoop();
});
$(document).on("mouseleave", "img", function() {
           startSlider();
});
