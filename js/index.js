const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const callback = (entries) => {
  const ent = entries[0];

  if (!ent.isIntersecting) {
    document.querySelector(".bar").classList.add("opacity-100");
    document.querySelector(".bar").classList.remove("opacity-0");
  }

  if (ent.isIntersecting) {
    document.querySelector(".bar").classList.remove("opacity-100");
    document.querySelector(".bar").classList.add("opacity-0");
  }
};

const observer = new IntersectionObserver(callback, options);

const target = document.querySelector("#hero");
observer.observe(target);
