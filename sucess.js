const params = new URLSearchParams(window.location.search);
const emailParam = document.querySelector(".verified-email");
const email = params.get("email");

emailParam.innerText = email;

const attr = emailParam.getAttribute("href");
const attrval = (attr.innerText = email);
console.log(attrval);
