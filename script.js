document.addEventListener("DOMContentLoaded", function () {
  const signInForm = document.getElementById("sign-in-form");
  const signUpForm = document.getElementById("sign-up-form");
  const showSignUpLink = document.getElementById("show-sign-up");
  const showSignInLink = document.getElementById("show-sign-in");

  showSignUpLink.addEventListener("click", function (e) {
    e.preventDefault();
    signInForm.classList.remove("active");
    signUpForm.classList.add("active");
  });

  showSignInLink.addEventListener("click", function (e) {
    e.preventDefault();
    signUpForm.classList.remove("active");
    signInForm.classList.add("active");
  });
});
