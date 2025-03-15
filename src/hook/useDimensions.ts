import { useEffect, useRef } from "react";

type RefType = React.RefObject<HTMLElement>;

export const useDimensions = (ref: RefType) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
