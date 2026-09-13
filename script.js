https://www.webtonative.com/preview/6aa69f8eb5d0c555666011b3const title = document.querySelector("#title");
const counter = document.querySelector("#counter");
const button = document.querySelector("#counter-button");

title.innerText = "JavaScript";
let count = 0;

button.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});
