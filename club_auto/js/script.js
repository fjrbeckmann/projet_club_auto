let btn = document.getElementById("hamMenu");
let nav = document.getElementById("nav");

btn.addEventListener("click", () => {
  if (getComputedStyle(nav).display != "none") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
});
