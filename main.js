const wordsSet1 = ['Powered by: EMD IT Solutions.'];

let part1;
let i = 0;
let offset1 = 0;
const len1 = wordsSet1.length;
let forwards1 = true;
let skip_count1 = 0;
const skip_delay = 15;
const speed = 70;

const wordflick = function (wordsSet, elementSelector) {
  let len = wordsSet.length;
  let i = 0;
  let offset = 0;
  let forwards = true;
  let skip_count = 0;

  setInterval(function () {
    if (forwards) {
      if (offset >= wordsSet[i].length) {
        ++skip_count;
        if (skip_count === skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset === 0) {
        forwards = true;
      }
    }

    part1 = wordsSet[i].substr(0, offset);

    if (skip_count === 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }

    $(elementSelector).text(part1);
  }, speed);
};

$(document).ready(function () {
  wordflick(wordsSet1, '.words1');
});

const form = document.querySelector("form");
const fullName = document.getElementById("FullName");
const email = document.getElementById("Email");
const concern = document.getElementById("concern");
const contact = document.getElementById("contactno");
const message = document.getElementById("Message");

function sendEmail() {
  const bodyMessage = `fullname: ${fullName.value}<br> email: ${email.value}<br> contact: ${contact.value}<br> concern: ${concern.value}<br>message: ${message.value}`;

  Email.send({
    SecureToken: "c595ecb9-e610-48f0-baf1-cff3e163e767",
    To: 'greatwavesmabical@gmail.com',
    From: "greatwavesmabical@gmail.com",
    Subject: "Message from Sender",
    Body: bodyMessage
  }).then(
    message => {
      if (message === "OK") {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
      }
    }
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});

document.getElementById("form-contact").addEventListener("submit", function(event) {
  event.preventDefault(); 

  

  document.getElementById("form-contact").reset();

 
});

