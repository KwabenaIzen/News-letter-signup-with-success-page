const form = document.getElementById("form");
const email = document.getElementById("email");
const warning = document.querySelector(".warning");

const emailPattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/;

form.addEventListener("submit", (event) => {
  let isValid = true;
  if (email.value.trim() === "" || !email.value.match(emailPattern)) {
    event.preventDefault();
    isValid = false;
    warning.classList.remove("hidden");
    email.style.borderColor = " hsl(4, 100%, 67%)";
    email.style.color = "hsl(4, 100%, 67%)";
    email.style.backgroundColor = " hsla(4, 100%, 67%, 0.205";
  } else isValid = true;

  //   form.reset();
});

email.addEventListener("keyup", () => {
  if (email.value.match(emailPattern)) {
    email.style.borderColor = " hsl(234, 29%, 20%)";
    email.style.backgroundColor = " Transparent";
    warning.classList.add("hidden");
    email.style.color = "hsl(234, 29%, 20%)";
  }
});
