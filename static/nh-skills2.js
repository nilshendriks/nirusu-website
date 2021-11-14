const callback = (entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    //console.log(target);
    if (!isIntersecting) {
      if (target.classList.contains("have-intersected-and-animated")) {
        target.classList.add("in-active");
      }
      return target.classList.remove("active");
    }
    target.classList.remove("in-active");
    target.classList.add("active");
    target.classList.add("have-intersected-and-animated");
  });
};

const observer = new IntersectionObserver(callback, {
  root: document.querySelector("nh-section"),
  threshold: 1.0
});

document
  .querySelectorAll(".nh-section--skills")
  .forEach((el) => observer.observe(el));
