const iconTarg = document.querySelectorAll(".icon-i");
const pHeader = document.querySelector(".header-item");
const bodyItem = document.querySelector(".body-item");

iconTarg.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    let yo = e.target;
    let go = yo.parentElement;
    let lol = go.parentElement;
    yo.classList.toggle("active");
    lol.classList.toggle("active");
  });
});
