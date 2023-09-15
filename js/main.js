
// Function to add 'scrolled' class to navbar on scroll
const navbar = document.querySelector('.navbar'),
  blackIconlink = document.querySelector('.blackIcon'),
  logowhitelink = document.querySelector('.logowhite'),
  navlink = document.querySelectorAll('.nav-link'),
  icons = document.querySelector('.icons');

onscroll = _ => {
  if (window.scrollY > 30) {
    navbar.classList.add('bgwhite', 'fixed-top', 'text-black')
    navbar.classList.remove('text-white')
    icons.classList.remove('text-white')
    navbar.style.boxShadow = `black 5px -3px 7px 0px`;
    blackIconlink.classList.remove('d-lg-none')
    logowhitelink.classList.remove('d-lg-block')
  } else {
    navbar.classList.remove('bgwhite', 'fixed-top')
    navbar.style.boxShadow = `0 0 0px black`;
    navbar.classList.add('text-white')
    icons.classList.add('text-white')
    blackIconlink.classList.add('d-lg-none')
    logowhitelink.classList.add('d-lg-block')
  }

}


// on click in navlink (men , women , kids) become bg white
navlink.forEach((button) => {
  button.onclick = _ => {
    button.classList.toggle("show")
    navbar.classList.remove('text-white')
    icons.classList.remove('text-white')
    navbar.classList.add('bgwhite', 'text-black')
    icons.classList.add('text-black')
    blackIconlink.classList.remove('d-lg-none')
    logowhitelink.classList.remove('d-lg-block')
  }
})


// change the background image
const indicatorButtons = document.querySelectorAll('.carousel-indicators button'); //pagination
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');
const mainBG =  document.querySelector('.bg-image');
const backgroundImages = [
  'url("../img/mainpic.webp")',
  'url("../img/main2.webp")',
  'url("../img/main3.webp")',
];
const linearGradient = 'linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20))';
let currentIndex = 0;

indicatorButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    updateBackground(index);
  });
});

prevButton.addEventListener('click', () => {
  currentIndex--; 
  if (currentIndex < 0) {
    currentIndex = backgroundImages.length - 1; 
  }
  updateBackground(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex++; 
  if (currentIndex >= backgroundImages.length) {
    currentIndex = 0; 
  }
  updateBackground(currentIndex);
});

function updateBackground(index) {
  const backgroundImage = `${linearGradient}, ${backgroundImages[index]}`;
  mainBG.style.backgroundImage = backgroundImage;
  // Update pagination buttons
  indicatorButtons.forEach((button, i) => {
    if (i === index) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}





// function to scale the image
const cards = document.querySelectorAll('.secondSection .card');
cards[0].classList.add("scaleCard")
function toggleScale(clickedCard) {
  // Remove the class scaleCard  from all cards
  cards.forEach(function (card) {
    card.classList.remove('scaleCard');
  });

  // Add class scaleCard  to the clicked card
  clickedCard.classList.add('scaleCard');
}


function toSecondPage() {
  window.open("/product.html")
}



//Initialize Swiper

var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {

    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  }
});


//  on click to icon footer become bigger (beat)
let socialMediaIcons = document.querySelectorAll(".socialMedia a i");

socialMediaIcons.forEach(function (icon) {
  icon.addEventListener('mouseover', function () {
    icon.classList.add('fa-beat');
  });

  // remove  class fa-beat when the mouse out "leaves"
  icon.addEventListener('mouseout', function () {
    icon.classList.remove('fa-beat');
  });
});



// show and hide password
const showPasswordIcon = document.getElementById('showPassword');
const hidePasswordIcon = document.getElementById('hidePassword');
const password = document.getElementById('passwordInput');


showPasswordIcon.addEventListener('click', () => {
  password.type = 'text';
  showPasswordIcon.style.display = 'none';
  hidePasswordIcon.style.display = 'block';
});

hidePasswordIcon.addEventListener('click', () => {
  password.type = 'password';
  hidePasswordIcon.style.display = 'none';
  showPasswordIcon.style.display = 'block';
});



//to declare Phone Number Field With Country Code Dropdown List
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});


