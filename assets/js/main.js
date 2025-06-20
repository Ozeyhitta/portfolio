/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  //chuyen doi class cua phan tu
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};
function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}
/* ----- TYPING EFFECT ----- */
var TypingeEffect = new Typed(".typeText", {
  strings: ["Designer", "Developer", "Coder"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

// var TypingeEffect = new Typed(".typeText", {
//   strings: [
//     "<span style='color:red;'>D</span><span style='color:orange;'>e</span><span style='color:yellow;'>s</span><span style='color:green;'>i</span><span style='color:blue;'>g</span><span style='color:indigo;'>n</span><span style='color:violet;'>e</span>r",
//   ],
//   typeSpeed: 100,
//   backSpeed: 80,
//   loop: true,
//   backDelay: 2000,
//   html: true,
// });

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });
/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });
/* -- HEADINGS -- */
sr.reveal(".top-header", {});
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});
srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });
/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
