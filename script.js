const sectionContainer = document.querySelector(".section_container");
const conclusionContainer = document.querySelector(".conclusion");
const submitBtn = document.getElementById("btn-submit");
const thanksBtn = document.getElementById("thanks-id");
const inputEmail = document.getElementById("email");
const errorParagraph = document.getElementById("error");

inputEmail.addEventListener("invalid", function (e) {
  e.preventDefault();
  errorParagraph.classList.remove("hide");
  errorParagraph.classList.add("active");
  inputEmail.style.borderColor = "red";
  inputEmail.style.backgroundColor = "#FFE8E6";
});

inputEmail.addEventListener("input", function () {
  if (inputEmail.validity.valid) {
    errorParagraph.classList.add("hide");
    errorParagraph.classList.remove("active");
  }
});

submitBtn.addEventListener("click", function (e) {
  if (inputEmail.validity.valid) {
    e.preventDefault();
    sectionContainer.classList.add("hide");
    sectionContainer.classList.remove("active");
    conclusionContainer.classList.add("active");
    conclusionContainer.classList.remove("hide");
  }
});

thanksBtn.addEventListener("click", function (e) {
  e.preventDefault();
  sectionContainer.classList.add("active");
  sectionContainer.classList.remove("hide");
  conclusionContainer.classList.add("hide");
  conclusionContainer.classList.remove("active");
});
