import { motion } from "framer-motion";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Projects() {
  const variant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition:{
        duration: 1,
      }
    },
    exit: {
      opacity: 0.5,
      transition:{
        duration: 1,
      }
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={variant}
      className="project-container overflow-hidden h-screen w-screen absolute bg-slate-700 dark:bg-primary1"
    >
      <button>
        <Link to="/">TO HOME</Link>
      </button>
    </motion.div>
  );
}
