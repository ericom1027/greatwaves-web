const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click',()=>{
navlinks.classList.toggle('mobile-menu')
})


let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach((slide) => slide.style.display = 'none');
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 2000); // Change image every 2 seconds (2000ms)
}

showSlides(); // Start the slideshow


// Send message to gmail account//
const form = document.querySelector("form");
const firstname= document.getElementById("Firstname");
const Lastname= document.getElementById("Lastname");
const email= document.getElementById("Email");
const Phone= document.getElementById("phone");
const msg= document.getElementById("Message");

function sendEmail() {
const bodyMessage = `Firstname: ${firstname.value}<br> Lastname: ${Lastname.value}<br> Email: ${email.value}<br> Mobile no: ${Phone.value}<br> Message: ${msg.value}`;

  Email.send({
    SecureToken : "c595ecb9-e610-48f0-baf1-cff3e163e767",
    To : 'greatwavesmabical@gmail.com',
    From : "greatwavesmabical@gmail.com",
    Subject : "Message from Sender",
    Body : bodyMessage
}).then(
  message => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }

  }
);
}

form.addEventListener("submit", (e)=> {
  e.preventDefault();
  
  sendEmail();

});
 // Clear text filed //
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents the default form submission

  // Resetting the form fields after submission
  document.getElementById("myForm").reset();
});

var wordsSet1 = ['Powered by: EMD IT Solutions'];

var part1;
var i = 0;
var offset1 = 0;
var len1 = wordsSet1.length;
var forwards1 = true;
var skip_count1 = 0;
var skip_delay = 15;
var speed = 70;

var wordflick = function () {
  setInterval(function () {
    if (forwards1) {
      if (offset1 >= wordsSet1[i].length) {
        ++skip_count1;
        if (skip_count1 === skip_delay) {
          forwards1 = false;
          skip_count1 = 0;
        }
      }
    } else {
      if (offset1 === 0) {
        forwards1 = true;
        offset1 = 0;
      }
    }

    part1 = wordsSet1[i].substr(0, offset1);

    if (skip_count1 === 0) {
      if (forwards1) {
        offset1++;
      } else {
        offset1--;
      }
    }

    $('.words1').text(part1);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});
