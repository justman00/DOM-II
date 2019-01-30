// Your code goes here
const btns = document.querySelectorAll(".btn");
const colorful = document.querySelectorAll("#colorful span");
// console.log(colorful);
const contentPick = document.querySelector(".content-pick");

btns[0].addEventListener("mouseover", e => {
  colorful.forEach(
    word =>
      (word.style.color =
        "#" + Math.floor(Math.random() * 16777215).toString(16))
  );
});

btns[0].addEventListener("mouseout", e => {
  colorful.forEach(word => (word.style.color = ""));
});

btns[1].addEventListener("click", e => {
  e.stopPropagation();
  TweenMax.from("#par-animation", 0.5, {
    opacity: 0,
    scale: 0,
    ease: Back.easeOut.config(1.7)
  });
});

const destinations = document.querySelectorAll(".destination");
destinations.forEach(dest => (dest.style.opacity = 0));

contentPick.addEventListener("dblclick", e => {
  TweenMax.to(".destination", 1, {
    opacity: 1,
    ease: Back.easeOut.config(1.7)
  });
});

const intro = document.querySelector(".intro");
window.addEventListener("load", e => {
  TweenMax.from(intro, 1, {
    x: 200,
    opacity: 0,
    ease: Back.easeOut.config(1.7),
    scale: 0.5
  });
  TweenMax.from(".logo-heading", 0.5, {
    opacity: 0,
    rotation: 360,
    scale: 0.1,
    x: 300,
    ease: Back.easeOut.config(1.7)
  });
});

const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
  input.addEventListener("focus", e => {
    e.target.style.borderColor = "red";
  });
});

inputs.forEach(input => {
  input.addEventListener("blur", e => {
    e.target.style.borderColor = "grey";
  });
});

const pickH2 = document.querySelectorAll(".form h2");

const textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", e => {
  btns[3].style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  e.target.style.borderColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  pickH2.forEach(
    h2 =>
      (h2.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16))
  );
});

textarea.addEventListener("select", e => {
  pickH2[1].innerText = `I see what you selected there: \n ${
    e.srcElement.value
  }`;
});
const contentSection = document.querySelectorAll(".home img");
console.log(contentSection);

window.addEventListener("scroll", e => {
  contentSection.forEach(img => (img.style.boxShadow = "3px 3px 5px 6px #ccc"));
});

document
  .querySelectorAll("nav a")
  .forEach(aTag => aTag.addEventListener("click", e => e.preventDefault()));
