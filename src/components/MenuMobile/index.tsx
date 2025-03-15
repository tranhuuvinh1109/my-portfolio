import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useDimensions } from "../../hook/useDimensions";

type MenuMobileProps = {
  active: string;
  setActive: (value: string) => void;
};
const MenuMobile = ({ active, setActive }: MenuMobileProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef}>
        <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
        <Navigation isOpen={isOpen} toggleOpen={toggleOpen} active={active} setActive={setActive} />
      </motion.nav>
    </>
  );
};

export default MenuMobile;
