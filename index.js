let navBtn = document.querySelector("#nav-toggle");
let navClose = document.querySelector("#nav-close");
let navMenu = document.querySelector("#nav__menu");
if (navBtn) {
  navBtn.addEventListener("click", () => {
    navMenu.classList.add("nav__show");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("nav__show");
  });
}

let header = document.querySelector("#header");
window.addEventListener("scroll", addScroll);
function addScroll() {
  if (window.scrollY >= 50) {
    header.classList.add("header__scroll");
  } else {
    header.classList.remove("header__scroll");
  }
}

// ================== ACCORDION ====================

let headers = document.querySelectorAll(".accordion-header");
// let accordion = document.querySelector(".accordion-item");
headers.forEach((header) => {
  header.addEventListener("click", function (e) {
    let content = this.nextElementSibling;
    content.classList.toggle("show");
    let accordion = this.parentElement;
    if (accordion) {
      accordion.classList.add("border");
    }

    let contents = document.querySelectorAll(".accordion-content");
    contents.forEach((item) => {
      if (item !== content) {
        item.classList.remove("show");
      }
    });
  });
});

// ====================  REGISTER   PAGE  ======================

let inputs = document.getElementsByTagName("input");
let form = document.querySelector("#input-form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let isValid = true;

//   let fullName = document.querySelector("#fullname");
//   let userName = document.querySelector("#username");
//   let email = document.querySelector("#email");
//   let address = document.querySelector("#address");
//   let refaral = document.querySelector("#refaral");
//   let phone = document.querySelector("#phone");
//   let password = document.querySelector("#password");
//   let password1 = document.querySelector("#password-1");
//   let checks = document.querySelector("#checks");

//   if (fullName.value.trim() === "") {
//     isValid = false;
//     fullName.classList.add("error");
//   }
//   if (!isValid) {
//     e.preventDefault();
//   }
//   window.location.href = "index.html";
// });

const fullname = document.getElementById("fullname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const password = document.getElementById("password");
const confirmPass = document.getElementById("password-1");
const check = document.getElementById("check");
document.getElementById("input-form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("here");
  validateInput();
  if (validateInput()) {
    window.location.href = "index.html";
  }
});

function validateInput() {
  let fullNameValue = fullname.value.trim();
  let userNameValue = username.value.trim();
  let emailValue = email.value.trim();
  let phoneValue = phone.value.trim();
  let addressValue = address.value.trim();
  let passwordValue = password.value.trim();
  let password1Value = confirmPass.value;
  let checkValue = check.value.trim();

  if (fullNameValue === "") {
    setError(fullname, "you must input your full name");
  } else {
    setSucess(fullname);
  }

  if (userNameValue === "") {
    setError(username, "you must input your username");
  } else {
    setSucess(username);
  }

  if (emailValue === "") {
    setError(email, "your email is required");
  } else if (!isEmail(emailValue)) {
    setError(email, "email is not valid");
  } else {
    setSucess(email);
  }

  if (phoneValue === "") {
    setError(phone, "you must input a valid phone number");
  } else {
    setSucess(phone);
  }

  if (passwordValue === "") {
    setError(password, "you must input a valid password");
  } else {
    setSucess(password);
  }

  if (password1Value === "") {
    setError(confirmPass, "you must input a valid password");
  } else if (password1Value !== passwordValue) {
    setError(confirmPass, "password does not match");
  } else {
    setSucess(confirmPass);
  }
  // if (!check.checked) {
  //   setError()
  // }
}

function setError(input, message) {
  let formControl = input.parentElement;
  console.log(formControl);
  let errorMessage = formControl.querySelector(".error");
  errorMessage.innerHTML = message;
}

function setSucess(input) {
  let formControl = input.parentElement;
  let errorMessage = formControl.querySelector(".error");
  errorMessage.innerHTML = "";
}

function isEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(
    email
  );
}
// function checkInputs(params) {
//   let isValid = true;
//   // Full Name validation
//   if (fullname.value.trim() === "") {
//     isValid = false;
//     document.getElementById("fullname-error").style.display = "block";
//   } else {
//     document.getElementById("fullname-error").style.display = "none";
//   }

//   // User Name validation
//   if (username.value.trim() === "") {
//     isValid = false;
//     document.getElementById("username-error").style.display = "block";
//   } else {
//     document.getElementById("username-error").style.display = "none";
//   }

//   // Email validation
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(email.value)) {
//     isValid = false;
//     document.getElementById("email-error").style.display = "block";
//   } else {
//     document.getElementById("email-error").style.display = "none";
//   }

//   // Phone validation
//   const phonePattern = /^\d{10}$/;
//   if (!phonePattern.test(phone.value)) {
//     isValid = false;
//     document.getElementById("phone-error").style.display = "block";
//   } else {
//     document.getElementById("phone-error").style.display = "none";
//   }

//   // Address validation
//   if (address.value.trim() === "") {
//     isValid = false;
//     document.getElementById("address-error").style.display = "block";
//   } else {
//     document.getElementById("address-error").style.display = "none";
//   }

//   // Password validation
//   if (password.value.length < 8) {
//     isValid = false;
//     document.getElementById("password-error").style.display = "block";
//   } else {
//     document.getElementById("password-error").style.display = "none";
//   }

//   // Confirm Password validation
//   if (password.value !== confirmPassword.value) {
//     isValid = false;
//     document.getElementById("confirm-password-error").style.display = "block";
//   } else {
//     document.getElementById("confirm-password-error").style.display = "none";
//   }

//   // Terms and conditions checkbox validation
//   if (!check.checked) {
//     isValid = false;
//     document.getElementById("check-error").style.display = "block";
//   } else {
//     document.getElementById("check-error").style.display = "none";
//   }

//   if (isValid) {
//     window.location.href = "index.html";
//   }
// }
