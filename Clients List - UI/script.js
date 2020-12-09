const searchIcon = document.querySelector(".search-icon");
const CloseIcon = document.querySelector(".close-icon");
const search = document.querySelector(".search");
const clientItem = document.querySelectorAll(".client-item");
const options = document.querySelectorAll(".options");
const addItem = document.querySelector(".add-item");
const modalClient = document.querySelector(".modal-client");
const plusIcon = document.querySelector(".plus-icon");
const closeItem = document.querySelector(".close-icon-item");


addItem.addEventListener("click", () => {
  modalClient.classList.add("active");
  plusIcon.classList.add("active");

});

closeItem.addEventListener("click", () => {
  modalClient.classList.remove("active");
  plusIcon.classList.remove("active");
});


searchIcon.addEventListener("click", () => {
  search.classList.add("active");
});
CloseIcon.addEventListener("click", () => {
  search.classList.remove("active");
});

const listOptions = (event) => {
  const tar = Array.from(clientItem).indexOf(event.target);
  tri = event.target;
  const yo = options[tar];
  const ro = clientItem[tar];
  yo.classList.toggle("active");
  ro.classList.toggle("active");
};

clientItem.forEach((item) => {
  item.addEventListener("click", listOptions);
});


function newFunction() {
  console.log("ffdsdfsdfsd");
}

