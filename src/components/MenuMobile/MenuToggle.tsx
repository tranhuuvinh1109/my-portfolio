import { motion, SVGMotionProps } from "framer-motion";

type PathProps = SVGMotionProps<SVGPathElement>;

const Path = (props: PathProps) => (
  <motion.path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" {...props} />
);

type MenuToggleProps = {
  toggle: () => void;
  isOpen: boolean;
};
export const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => (
  <div className={`fixed left-0 right-0 top-0 z-50  bg-white p-4 ${isOpen ? "" : "shadow-lg"}  `}>
    <div className="flex justify-end">
      <button onClick={toggle}>
        <svg width="32" height="32" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
    </div>
  </div>
);
