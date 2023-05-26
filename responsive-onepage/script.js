let menu = document.querySelector("#menu-icon");
let navList = document.querySelector(".navList");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navList.classList.toggle("open");
};

const scroll = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
});
scroll.reveal(".hero-text", { delay: 200, origin: "top" });
scroll.reveal(".hero-img", { delay: 450, origin: "top" });
scroll.reveal(".icons", { delay: 500, origin: "left" });
scroll.reveal(".scroll-down", { delay: 500, origin: "right" });
scroll.reveal(".about-text", { delay: 500, origin: "left" });
