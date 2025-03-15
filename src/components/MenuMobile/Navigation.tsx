import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { CHAP } from "../../constant/common";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2, duration: 0.5 },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

type NavigationProps = {
  isOpen: boolean;
  toggleOpen: () => void;
  active: string;
  setActive: (value: string) => void;
};

export const Navigation = ({ isOpen, toggleOpen, active, setActive }: NavigationProps) => {
  if (!isOpen) return null;
  return (
    <motion.div
      className={`fixed left-0 top-0 h-screen w-full ${isOpen ? "bg-black/10" : ""} pt-16`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.ul
        variants={variants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="flex w-full flex-col gap-4 bg-white px-4 py-6"
      >
        {CHAP.map((item, index) => (
          <MenuItem key={index} item={item} active={active} toggleOpen={toggleOpen} setActive={setActive} />
        ))}
      </motion.ul>
    </motion.div>
  );
};
