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
