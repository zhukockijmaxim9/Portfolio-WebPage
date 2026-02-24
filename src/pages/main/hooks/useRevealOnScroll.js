import { useEffect } from "react";

const revealRatio = 0.1;

const defaultObserverOptions = {
  threshold: [0, revealRatio],
  rootMargin: "0px 0px -10% 0px",
};

function useRevealOnScroll(selector = "[data-animate]", options = defaultObserverOptions) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const isVisible = entry.isIntersecting && entry.intersectionRatio >= revealRatio;
        entry.target.classList.toggle("is-visible", isVisible);
      });
    }, options);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector, options]);
}

export default useRevealOnScroll;
