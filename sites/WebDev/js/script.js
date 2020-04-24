new WOW().init();

var burger = document.querySelector(".nav-burger");
var menu = document.querySelector(".nav");

burger.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu);

function toggleMenu(){
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  document.querySelector("body").classList.toggle("lock");
}

var header = document.querySelector("header");
const progress = document.querySelector(".progressiv-bar__line");
window.addEventListener('scroll', function() {
  let windowScroll = this.document.body.scrollTop || this.document.documentElement.scrollTop;
  let windowHeight = this.document.documentElement.scrollHeight - this.document.documentElement.clientHeight;
  let per = windowScroll/windowHeight*100;
  progress.style.width = per+"%";
  if(window.pageYOffset>document.documentElement.clientHeight){
    header.classList.add("fixed");
  }
  else{
    header.classList.remove("fixed");
  }
});

$(".section-6-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
