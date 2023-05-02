/*toggle style switcher */
let styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
/*спрятать при скроле*/
const navLinks = document.querySelectorAll(".nav li a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
      document.querySelector(".style-switcher").classList.remove("open");
    }
  });
});
/*переключатель цветов*/
let alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if(color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else{
      style.setAttribute("disabled", true);
    } 
  })
}

/* переключатель темного режима */
let dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", ()=>{
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})
window.addEventListener("load", ()=>{
  if (document.body.classList.contains("dark"))
  {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon")
  }
})
