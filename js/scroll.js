const scrollFunc = (sectionName) => {
  const yOffset = -50;
  const y =
    sectionName.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};

const contactBtn = document.querySelector(".contact-btn");

const contactSection = document.querySelector(".contact-form");

contactBtn.addEventListener("click", () => {
  scrollFunc(contactSection);
});

const scrollHor = document.querySelector(".line-scroll");

const mainCallback = () => {
  let pageHeight = document.body.scrollHeight - window.innerHeight;
  let yOffset = window.scrollY;
  let procentSeen = yOffset / pageHeight;

  scrollHor.style.width = `${procentSeen * 100}%`;
};

window.addEventListener(
  "scroll",
  _.throttle(mainCallback, 5, { trailing: true, leading: true })
);
