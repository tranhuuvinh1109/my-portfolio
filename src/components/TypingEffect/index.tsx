import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedRef} className="typing text-3xl font-semibold text-highlight"></span>;
};

export default TypingEffect;
