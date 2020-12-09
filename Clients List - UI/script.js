const searchIcon = document.querySelector(".search-icon");
const CloseIcon = document.querySelector(".close-icon");
const search = document.querySelector(".search");
const clientList = document.querySelector(".client-list");
const options = document.querySelectorAll(".options");
const addItem = document.querySelector(".add-item");
const modalClient = document.querySelector(".modal-client");
const plusIcon = document.querySelector(".plus-icon");
const closeItem = document.querySelector(".close-icon-item");
const menuIcon = document.querySelector(".menu-icon");
const menuItem = document.querySelector(".menu-item");
const closeMenuItem = document.querySelector(".close-menu-item");

// ADD CLIENT 
addItem.addEventListener("click", () => {
  modalClient.classList.add("active");
  plusIcon.classList.add("active");

});

closeItem.addEventListener("click", () => {
  modalClient.classList.remove("active");
  plusIcon.classList.remove("active");
});

// SEARCH 
searchIcon.addEventListener("click", () => {
  search.classList.add("active");
});

CloseIcon.addEventListener("click", () => {
  search.classList.remove("active");
});



let client = clientList.childNodes;

client.forEach((cli,ind) => {
  let gii = cli.childNodes;
  for(let x=0; x<gii.length; x++){
    gii[x].addEventListener('click',e =>{
      let lol = e.target;
      client[ind].classList.toggle("active");
    })
  }
})

// menu
menuIcon.addEventListener("click", () => {
  menuItem.classList.add("active");

});

closeMenuItem.addEventListener("click", () => {
  menuItem.classList.remove("active");
});