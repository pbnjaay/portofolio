const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const callback = (entries) => {
  const ent = entries[0];

  if (!ent.isIntersecting) {
    document.querySelector(".bar").classList.remove("-translate-y-full");
  }

  if (ent.isIntersecting) {
    document.querySelector(".bar").classList.add("-translate-y-full");
  }
};

const observer = new IntersectionObserver(callback, options);

const target = document.querySelector("#hero");
observer.observe(target);

let sections = document.querySelectorAll("section");

onscroll = () => {
  let scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      let currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

let removeAllActiveClasses = () => {
  document.querySelectorAll("nav a").forEach((el) => {
    el.classList.remove("text-zenith");
    el.querySelector("span:nth-of-type(2)").classList.remove("bg-zenith");
    el.querySelector("span:nth-of-type(2)").classList.remove("w-12");
  });
};

let addActiveClass = (id) => {

  let selector;
  if (id == "hero") return;
  selector = `nav a[href="#${id}"]`;
  el = document.querySelector(selector);
  el.classList.add("text-zenith");
  el.querySelector("span:nth-of-type(2)").classList.add("bg-zenith");
  el.querySelector("span:nth-of-type(2)").classList.add("w-12");
};

let navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let currentId = e.target.attributes.href.value;
    let section = document.querySelector(currentId);
    let sectionPos = section.offsetTop;

    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});
