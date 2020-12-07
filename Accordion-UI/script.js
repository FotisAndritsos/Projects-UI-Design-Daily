const iconTarg = document.querySelectorAll(".icon-i");

iconTarg.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    let yo = e.target;
    let go = yo.parentElement;
    let lol = go.parentElement;
    yo.classList.toggle("active");
    lol.classList.toggle("active");
  });
});
