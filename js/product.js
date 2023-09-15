
// decrease-btn & increase-btn
let itemsAmmount = document.querySelectorAll(".itemsAmmount")

// children[0] decrease-btn 
// children[1] count
// children[2] increase-btn

itemsAmmount.forEach(element => {
  let count = +element.children[1].innerText 

  // on click decrease-btn
  element.children[0].addEventListener("click", _ => {
    if (count > 1) {
      count--;
    } else {
      count = 1;
    }
    element.children[1].innerText = count
  })

  // on click increase-btn
  element.children[2].addEventListener("click", _ => {
    element.children[1].innerText = count++;
  })

});






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

  // Hide the show password icon and display the hide password icon
  showPasswordIcon.style.display = 'none';
  hidePasswordIcon.style.display = 'block';
});

hidePasswordIcon.addEventListener('click', () => {
  // Hide the password by changing the input type back to "password"
  password.type = 'password';

  // Hide the hide password icon and display the show password icon
  showPasswordIcon.style.display = 'block';
  hidePasswordIcon.style.display = 'none';
});



//to declare Phone Number Field With Country Code Dropdown List
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});



$(document).ready(function () {

  $("input[name='rating']").click(function () {
    var sim = $("input[name='rating']:checked").val();
    //alert(sim);
    if (sim < 3) {
      $('.myratings').css('color', 'red');
      $(".myratings").text(sim);
    } else {
      $('.myratings').css('color', 'green');
      $(".myratings").text(sim);
    }
  });


});

