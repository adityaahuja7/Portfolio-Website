import { motion } from "framer-motion";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Projects() {
  const variant = {
    hidden: {
      opacity: 0.5,
    },
    show: {
      opacity: 1,
    },
    exit: {
      opacity: 0.5,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={variant}
      transition={{ duration: 0.3 }}
      className="project-container overflow-hidden h-screen w-screen absolute bg-primary-background1 dark:bg-primary-background2"
    >
      <button>
        <Link to="/">TO HOME</Link>
      </button>
    </motion.div>
  );
}
