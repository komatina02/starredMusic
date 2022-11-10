const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav");

hamburger.addEventListener("click", () => toogleClass());

let active = false;

const navClassList = navBar.className;

const toogleClass = () => {
  active = !active;
  navBar.className = active
    ? `${navClassList} active`
    : `${navClassList} not-active`;
};
