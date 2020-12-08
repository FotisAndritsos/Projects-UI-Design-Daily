const btnContainer = document.querySelector(".btn-container");
const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".close");

btnContainer.addEventListener('click',()=>{
  modal.classList.add("active");
  btnContainer.classList.add("active");
})
btnClose.addEventListener("click", () => {
  modal.classList.remove("active");
  btnContainer.classList.remove("active");
});