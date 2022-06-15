const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', ()=>{
btn.classList.toggle('open');
nav.classList.toggle('flex');
nav.classList.toggle('hidden')
});

/*--home section--*/


const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
// const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  // slideIcons.forEach((slideIcon) => {
  //   slideIcon.classList.remove("active");
  // });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  // slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  // slideIcons.forEach((slideIcon) => {
  //   slideIcon.classList.remove("active");
  // });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  // slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    // slideIcons.forEach((slideIcon) => {
    //   slideIcon.classList.remove("active");
    // });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    // slideIcons[slideNumber].classList.add("active");
  }, 5000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});


/*** bark-mode***/

const checkbox = document.querySelector('#toggle');

const checkboxtwo = document.querySelector('#toggleTwo');
const html = document.querySelector("html");

const toggleDarkMode = function(){


checkbox.checked
? html.classList.add("dark")
:html.classList.remove("dark")

}

const toggleDarkModeTwo = function(){


    checkboxtwo.checked
    ? html.classList.add("dark")
    :html.classList.remove("dark")
    
    }

toggleDarkModeTwo();
checkbox.addEventListener("click",toggleDarkMode);
checkboxtwo.addEventListener("click",toggleDarkModeTwo);

/****navbar underline hover*/

const currentLocation = location.href;
const menuItme = document.querySelectorAll('a');
const menuLenght = menuItme.length;
for(let i = 0; i<menuLenght; i++){
  if(menuItme[i].href === currentLocation){
    menuItme[i].className = "active"
  }
}



let videoBtn = document.querySelector('.btn');
let videoClip = document.querySelector('.clip');
let close = document.querySelector('.close');

videoBtn.onclick = function(){
  videoBtn.classList.add('active');
  videoClip.classList.add('active');

}
close.onclick = function(){
  videoBtn.classList.remove('active');
  videoClip.classList.remove('active');

}