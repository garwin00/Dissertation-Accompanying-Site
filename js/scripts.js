// Video button Control

var video = document.getElementById("header-video");

var btn = document.getElementById("pausebtn");

function playToggle() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "I I⠀Pause";
  } else {
    video.pause();
    btn.innerHTML = "&#9654;⠀Play";
  }
}

// Scroll Button Fade

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() == 0) {
      $('#scroll').show();
    } else {
      $('#scroll').fadeOut(500);;
    }
  });
})

// Video Control Fade

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() == 0) {
      $('#pausebtn').show();
    } else {
      $('#pausebtn').fadeOut(500);;
    }
  });
})