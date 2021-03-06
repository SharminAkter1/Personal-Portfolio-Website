/* toggle style switcher */
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
   document.querySelector(".style-switcher").classList.toggle("open");
});

// hide style - switcher on scroll
window.addEventListener("scroll", () => {
  if(document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// hide ul - click ul-a 
// const navUl = document.querySelector(".nav");
// navUl.addEventListener("click", () => {
//   if(document.querySelector(".nav").classList .toggle("open")) {
//     document.querySelector(".nav").remove("open")
//   }
// });

/* Theme Color */
const alternativeStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternativeStyle.forEach((style) => {
     if(color === style.getAttribute("title")) {
       style.removeAttribute("disabled")

     } else {
       style.setAttribute("disabled", true);
     }

  });
}

/* Theme light and dark mode */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("normal")
})

window.addEventListener("load", () => {
  if(document.body.classList.contains("norlam")) {
    dayNight.querySelector("i").classList.add("fa-moon");

  } else {
    dayNight.querySelector("i").classList.add("fa-sun");
  }
})