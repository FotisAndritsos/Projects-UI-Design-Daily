const stats = document.querySelectorAll(".stat-num");
const statValue = document.querySelectorAll(".stat-value");

statsValArray = Array.from(statValue);
statsNumArray = Array.from(stats);
let width = 1;

var swiper = new Swiper(".swiper-container", {
  init: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
swiper.on("init", function () {
  statsValArray.forEach((sta, index) => {;
    var width = 1;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= statsNumArray[index].innerHTML) {
        clearInterval(id);
      } else {
        width++;
        statsValArray[index].style.width = width + "%";
        statsValArray[index].style.transition = "0.1s all ease";
      }
    }
  });
});
swiper.on("slideChange", function () {
  statsValArray.forEach((sta, index) => {
    // console.log((sta.style.width = statsNumArray[index].innerHTML + "%"));
    // console.log(Number(statsNumArray[index].innerHTML));
    // console.log(statsValArray[index]);
    var width = 1;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= statsNumArray[index].innerHTML) {
        clearInterval(id);
      } else {
        width++;
        statsValArray[index].style.width = width + "%";
        statsValArray[index].style.transition = "0.1s all ease";
      }
    }
  });
});
// init Swiper
swiper.init();

