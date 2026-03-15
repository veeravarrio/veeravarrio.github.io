<<<<<<< HEAD
// NAV HAMBURGER TO X
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.getElementById("nav-menu");

  hamburger.classList.toggle('active');
  if (hamburger.classList.contains('active')) {
    hamburger.textContent = "✕";
  } else {
    hamburger.textContent = "☰";
  }

  nav.classList.toggle("show");
};


// HERO ARROW ON SCROLL 
var prevScrollpos = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  var arrow = document.getElementById("scroll-down");
  if (prevScrollpos > currentScrollPos) {
    arrow.style.bottom = "0px";
    arrow.style.opacity = "1";
  } else {
    arrow.style.bottom = "-40px"; 
    arrow.style.opacity = "0";    
  }
  prevScrollpos = currentScrollPos;
};


// VIDEOS PLAY ON HOVER
document.addEventListener("DOMContentLoaded", () => {

  const projects = document.querySelectorAll(".project");

  projects.forEach(project => {

    const video = project.querySelector("video");

    if(!video) return;
    project.addEventListener("mouseenter", () => {
      document.querySelectorAll("video").forEach(v=>{
        if(v !== video){
          v.pause();
        }
      });
      video.play();
    });
    project.addEventListener("mouseleave", () => {
      video.pause();
    });
  });

});


// VIDEOS PLAY ON CLICK ON MOBILE DEVICES
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

if (isTouchDevice()) {
  document.querySelectorAll('.project').forEach(project => {
      project.addEventListener('click', () => {

          project.classList.toggle('active');

          const video = project.querySelector('video');
          if (video) {
              if (project.classList.contains('active')) {
                  video.play();
              } else {
                  video.pause();
              }
          }
      });
  });
}




=======
// NAV HAMBURGER TO X
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.getElementById("nav-menu");

  hamburger.classList.toggle('active');
  if (hamburger.classList.contains('active')) {
    hamburger.textContent = "✕";
  } else {
    hamburger.textContent = "☰";
  }

  nav.classList.toggle("show");
};


// HERO ARROW ON SCROLL 
var prevScrollpos = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  var arrow = document.getElementById("scroll-down");
  if (prevScrollpos > currentScrollPos) {
    arrow.style.bottom = "0px";
    arrow.style.opacity = "1";
  } else {
    arrow.style.bottom = "-40px"; 
    arrow.style.opacity = "0";    
  }
  prevScrollpos = currentScrollPos;
};


// VIDEOS PLAY ON HOVER
document.addEventListener("DOMContentLoaded", () => {

  const projects = document.querySelectorAll(".project");

  projects.forEach(project => {

    const video = project.querySelector("video");

    if(!video) return;
    project.addEventListener("mouseenter", () => {
      document.querySelectorAll("video").forEach(v=>{
        if(v !== video){
          v.pause();
        }
      });
      video.play();
    });
    project.addEventListener("mouseleave", () => {
      video.pause();
    });
  });

});


// VIDEOS PLAY ON CLICK ON MOBILE DEVICES
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

if (isTouchDevice()) {
  document.querySelectorAll('.project').forEach(project => {
      project.addEventListener('click', () => {

          project.classList.toggle('active');

          const video = project.querySelector('video');
          if (video) {
              if (project.classList.contains('active')) {
                  video.play();
              } else {
                  video.pause();
              }
          }
      });
  });
}




>>>>>>> 7bf1cca26c12798e79bb67b46951b2b0d3724769
