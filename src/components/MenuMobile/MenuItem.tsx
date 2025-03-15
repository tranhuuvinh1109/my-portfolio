import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type MenuItemProps = {
  active: string;
  item: {
    label: string;
    href: string;
  };
  toggleOpen: () => void;
  setActive: (value: string) => void;
};
export const MenuItem = ({ item, active, toggleOpen, setActive }: MenuItemProps) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        toggleOpen();
        setActive(item.href);
        document.getElementById(item.href)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <h2 className={`font-semibold ${active === item.href ? "text-highlight" : ""}`}>{item.label}</h2>
    </motion.li>
  );
};
