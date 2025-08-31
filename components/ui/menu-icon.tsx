"use client";
import { motion } from "framer-motion";
type MenuIconProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const MenuIcon: React.FC<MenuIconProps> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col justify-between items-center w-10 h-6 relative z-50 scale-75 px-2 md:scale-95 lg:hidden"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      role="button"
      tabIndex={0}
    >
      <motion.span
        className="block w-8 h-[3px] bg-gray-800 rounded-lg"
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 10 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block w-6 h-[3px] bg-gray-800 rounded-lg mx-auto"
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block w-8 h-[3px] bg-gray-800 rounded-lg"
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -10 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};

export { MenuIcon };
