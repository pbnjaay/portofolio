const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.9,
};

const callback = (entries) => {
  const ent = entries[0];

  if (!ent.isIntersecting) {
    document.querySelector(".bar").classList.remove("hidden");
  }

  if (ent.isIntersecting) {
    document.querySelector(".bar").classList.add("hidden");
  }
};

const observer = new IntersectionObserver(callback, options);

const target = document.querySelector(".hero");
observer.observe(target);
