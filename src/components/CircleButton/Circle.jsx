import { useEffect, useRef } from "react";
import "./CircleStyle.css";

const MainElement = () => {
  const shapesRef = useRef([]);

  useEffect(() => {
    const getRandomRadius = (min, max) => `${Math.floor(Math.random() * (max - min + 1)) + min}%`;

    const getBorders = () => {
      let randoms = "";
      for (let i = 0; i < 4; i++) {
        randoms += `${getRandomRadius(20, 60)} `;
      }
      return randoms.trim();
    };
    const getBordersCircle = () => {
      let randoms = "";
      for (let i = 0; i < 4; i++) {
        randoms += `${getRandomRadius(50, 90)} `;
      }
      return randoms.trim();
    };

    const interval = setInterval(() => {
      shapesRef.current.forEach((shape) => {
        if (shape) shape.style.borderRadius = getBorders();
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-element">
      <div className="shape1" ref={(el) => (shapesRef.current[0] = el)} />
      <div className="shape2" ref={(el) => (shapesRef.current[1] = el)} />
      <div className="shape3" ref={(el) => (shapesRef.current[2] = el)} />
      <div className="shape-circle" ref={(el) => (shapesRef.current[3] = el)} />
    </div>
  );
};

export default MainElement;
