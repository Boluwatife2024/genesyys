"use strict";
const bacToTopArrow = document.querySelector(".img--top");
const backToTop = document.querySelector(".back--top--text");
const navigation = document.querySelector(".navbar--container");
const topPage = function () {
  const navcoords = navigation.getBoundingClientRect();
  console.log(navcoords);
  window.scrollTo({
    left: navcoords.left,
    top: navcoords.top,
    behavior: "smooth",
  });
};
bacToTopArrow.addEventListener("click", topPage);
backToTop.addEventListener("click", topPage);
const login = document.querySelector(".login");
const mainPage = document.querySelector(".container");
const form = document.querySelector(".form");
// login.addEventListener("click", function (e) {
//   e.preventDefault();
//   form.classList.remove("hidden");
//   mainPage.style.filter = "blur(15px)";
//   mainPage.addEventListener("click", function () {
//     if (true) {
//       form.classList.add("hidden");
//       mainPage.style.filter = "blur(0px)";
//     }
//   });
// });
// mainPage.addEventListener("click", function () {
//   form.classList.add("hidden");
//   mainPage.style.filter = "blur(0)";
// });

login.addEventListener("click", function (e) {
  e.preventDefault();
  openForm();
  openLogin();
});

function openForm() {
  form.classList.remove("hidden");
  mainPage.style.filter = "blur(15px)";

  document.addEventListener("click", closeFormOnClickOutside);
}

function closeForm() {
  form.classList.add("hidden");
  mainPage.style.filter = "blur(0px)";

  document.removeEventListener("click", closeFormOnClickOutside);
}

function closeFormOnClickOutside(e) {
  if (
    !form.contains(e.target) &&
    e.target !== login &&
    e.target !== signupForm
  ) {
    closeForm();
  }
}
const signupBtn = document.querySelector(".signup--side");
const loginBtn = document.querySelector(".login--side");
const rightLine = document.querySelector(".active--right--line");
const leftLine = document.querySelector(".active--left--line");
const loginSection = document.querySelector(".login--section");
const signupSection = document.querySelector(".signup--section");
function openSignup() {
  rightLine.classList.remove("hidden");
  leftLine.classList.add("hidden");
  loginSection.classList.add("hidden");
  signupSection.classList.remove("hidden");
}
function openLogin() {
  rightLine.classList.add("hidden");
  leftLine.classList.remove("hidden");
  loginSection.classList.remove("hidden");
  signupSection.classList.add("hidden");
}
signupBtn.addEventListener("click", openSignup);
loginBtn.addEventListener("click", openLogin);
const signupForm = document.querySelector(".signup");
signupForm.addEventListener("click", function (e) {
  e.preventDefault();
  // form.classList.remove("hidden");
  // mainPage.style.filter = "blur(15px)";
  openForm();
  openSignup();
});
