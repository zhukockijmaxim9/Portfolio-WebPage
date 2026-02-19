import { useEffect } from "react";

const defaultObserverOptions = {
  threshold: 0.18,
  rootMargin: "0px 0px -8% 0px",
};

function useRevealOnScroll(selector = "[data-animate]", options = defaultObserverOptions) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector, options]);
}

export default useRevealOnScroll;
