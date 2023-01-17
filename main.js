const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const text_login = $("#text-login");
const pass_login = $("#pass-login");
const registerbtn = $(".register");
const login = $("#login");
const register = $("#register");
const text_res = $("#text-register");
const pass_res = $("#pass-register");

function start() {
  registerbtn.onclick = (e) => {
    e.preventDefault();
    login.style.display = "none";
    register.style.display = "flex";
  };
  $(".login-form").onclick = (e) => {
    e.preventDefault();
    login.style.display = "flex";
    register.style.display = "none";
  };
  checkInput();
}
start();
function checkInput() {
  // check input text login
  text_login.onblur = (e) => {
    if (text_login.value === "") {
      $(".message-login").style.display = "block";
    } else {
      $(".message-login").style.display = "none";
    }
  };
  // check input pass login
  pass_login.onblur = (e) => {
    if (pass_login.value === "") {
      $(".message-pass").style.display = "block";
    } else {
      $(".message-pass").style.display = "none";
    }
  };
  // check input text register
  text_res.onblur = (e) => {
    if (text_res.value === "" || text_res.value.length < 6) {
      $(".message-register").style.display = "block";
    } else {
      $(".message-register").style.display = "none";
    }
  };
  // check input pass register
  pass_res.onblur = (e) => {
    if (pass_res.value.includes(" ") || pass_res.value.length < 6) {
      $(".message-pass-register").style.display = "block";
    } else {
      $(".message-pass-register").style.display = "none";
    }
  };
  // check character password
  $(".fa-login").onclick = () => {
    $(".fa-login").classList.toggle("fa-eye");
    if ($(".fa-login").classList.contains("fa-eye")) {
      $("#pass-login").type = "text";
    } else {
      $("#pass-login").type = "password";
    }
  };
  $(".fa-res").onclick = () => {
    $(".fa-res").classList.toggle("fa-eye");
    if ($(".fa-res").classList.contains("fa-eye")) {
      $("#pass-register").type = "text";
    } else {
      $("#pass-register").type = "password";
    }
  };
}
