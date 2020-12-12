// SELECTING 
const stats = document.querySelectorAll(".stat-num");
const statValue = document.querySelectorAll(".stat-value");

// NODELISTS TO ARRAYS 
statsValArray = Array.from(statValue);
statsNumArray = Array.from(stats);

// STATS ANIMATION FUNCTION 
const statsAnimation = () => {
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
      }
    }
  });
};


// GSAP 
const gspAnimation = () => {
  var tl = gsap.timeline();
  tl.fromTo(
    ".ratings span:nth-child(1)",
    {
      color: "inherit",
    },
    {
      duration: 0.2,
      color: "orange",
      delay: 2,
    }
  )
    .fromTo(
      ".ratings span:nth-child(2)",
      { color: "inherit" },
      { duration: 0.2, color: "orange" }
    )
    .fromTo(
      ".ratings span:nth-child(3)",
      { color: "inherit" },
      { duration: 0.2, color: "orange" }
    )
    .fromTo(
      ".ratings span:nth-child(4)",
      { color: "inherit" },
      { duration: 0.2, color: "orange" }
    )
    .fromTo(".last", { color: "inherit" }, { duration: 0.2, color: "orange" })
    .fromTo("img",{
      transform: "scale(1)",
    }, {
      duration: 2,
      transform: "scale(1.3)",
      runBackwards: true,
      ease: "power1",
    });
};

// SWIPPER 

var swiper = new Swiper(".swiper-container", {
  init: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
swiper.on("init", statsAnimation(), gspAnimation());
swiper.on("slideChange",function(){
  statsAnimation();
  gspAnimation();
}); 

 
// init Swiper
swiper.init();


