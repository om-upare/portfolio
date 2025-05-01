import React, { useEffect, useRef } from "react";

const ScrollAnimation = ({ children }) => {
  const refElement = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          refElement.current.classList.add("visible");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (refElement.current) observer.observe(refElement.current);

    return () => observer.disconnect();
  });

  return <div ref={refElement} className="reveal">{children}</div>;
};

export default ScrollAnimation;
