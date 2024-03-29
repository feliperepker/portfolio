let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = menuSection.querySelector(".hamburguer-menu");

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";

  menuSection.classList.toggle("on", show);
  show = !show;
});

const observer = new IntersectionObserver(
  (entries) => {
    Array.from(entries).forEach((entry) => {
      if (entry.intersectionRatio >= 0.05) {
        entry.target.classList.add("init-hidden-off");
      }
    });
  },
  {
    threshold: [0, 0, 0.1],
  }
);
Array.from(document.querySelectorAll(".init-hidden")).forEach((element) => {
  observer.observe(element);
});

var coffe = document.querySelector(".cupCoffe");
var sorry = document.querySelector(".sorry");
coffe.addEventListener("click", () => {
  console.log("oi");
  coffe.classList.add("animationcoffe");
  sorry.classList.remove("hide");
});
