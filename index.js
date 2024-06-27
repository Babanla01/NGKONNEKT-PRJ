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
  validateInput();
});

function validateInput() {
  let isValid = true;

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
    isValid = false;
  } else {
    setSucess(fullname);
    isValid = true;
    if (userNameValue === "") {
      setError(username, "you must input your username");
      isValid = false;
    } else {
      setSucess(username);
      isValid = true;
      if (emailValue === "") {
        setError(email, "your email is required");
        isValid = false;
      } else if (!isEmail(emailValue)) {
        setError(email, "email is not valid");
        isValid = false;
      } else {
        setSucess(email);
        isValid = true;
        if (phoneValue === "") {
          setError(phone, "you must input a valid phone number");
          isValid = false;
        } else if (!isPhone(phoneValue)) {
          setError(phone, "you must input a valid phone number");
          isValid = false;
        } else {
          setSucess(phone);
          isValid = true;
          if (passwordValue === "") {
            setError(password, "you must input a valid password");
            isValid = false;
          } else {
            setSucess(password);
            isValid = true;
            if (password1Value === "") {
              setError(confirmPass, "you must input a valid password");
              isValid = false;
            } else if (password1Value !== passwordValue) {
              setError(confirmPass, "password does not match");
              isValid = false;
            } else {
              setSucess(confirmPass);
              isValid = true;
              if (!check.checked) {
                isValid = false;
              } else {
                isValid = true;
              }
            }
          }
        }
      }
    }
  }

  if (!isValid) {
    e.preventDefault();
  } else {
    saveUserData();
    window.location.href = "index.html";
  }
}
function saveUserData() {
  let users;
  users = JSON.parse(localStorage.getItem(users)) || [];
  let userData = {
    usersName: username.value.trim(),
    userEmail: email.value.trim(),
    pass: password.value.trim(),
  };
  users.push(userData);
  localStorage.setItem("users", JSON.stringify(users));
  console.log(users);
}

function setError(input, message) {
  let formControl = input.parentElement;
  let errorMessage = formControl.querySelector(".error");
  errorMessage.innerHTML = message;
  // setTimeout(function () {
  //   errorMessage.innerHTML = "";
  // }, 6000);
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
function isPhone(phone) {
  return /^\+?(\d{1,3})?[-. (]?(\d{1,4})?[-. )]?(\d{1,4})[-. ]?(\d{1,4})[-. ]?(\d{1,9})$/.test(
    phone
  );
}

const logInUser = document.querySelector("#login-user");
const logInPass = document.querySelector("#login-pass");
const login = document.querySelector("login-form");
login.addEventListener("submit", (e) => {
  e.preventDefault();
});
function validateLogin() {
  if (logInUser.value === "") {
    setError(logInUser, "please enter your userna,e");
  } else {
    setSucess(logInUser);
  }
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

// ========================= LOGIN VALIDATION ===========================
