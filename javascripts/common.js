//  Slider ==================================================

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

function nextSlide() {
  goToSlide(currentSlide+1);
}

function previousSlide() {
  goToSlide(currentSlide-1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

// button pause
var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
  pauseButton.innerHTML = '<i class="fa fa-play fa-2x" aria-hidden="true"></i>';
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = '<i class="fa fa-pause fa-2x" aria-hidden="true"></i>';
  playing = true;
  slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function() {
  if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};

// buttons next, previous
var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
  pauseSlideshow();
  nextSlide();
};
previous.onclick = function() {
  pauseSlideshow();
  previousSlide();
};

$(document).ready(function() {
  $('.my-paroller').paroller();
  $("#my-element").paroller({ factor: '-0.7', type: 'foreground', direction: 'vertical' });
  
  var shareMe = $('.share i');

  $('.about-f-e-devel, .must-know-section, .skills, .social').hover(function(){
    $('.share').css({ "color": "#000"});
    shareMe.css({ "border-color": "#000"});
    shareMe.css({ "color": "#000"});

  },function(){
    $('.share').css({"color": "#fff"});
    shareMe.css({ "border-color": "#fff"});
    shareMe.css({ "color": "#fff"});
  });

});
