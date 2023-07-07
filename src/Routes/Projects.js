import { react } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar.js";
import "../Styles/Navbar.css";

export default function projects() {
  const variants = {
    hidden: {
      opacity: 0.5,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const navbar_variant = {
    hidden: { y: -100 },
    show: {
      y: 0,
      transition: {
        type: "tween",
      },
    },
    exit: { y: -200 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={variants}
      className="root-container aspect-video bg-cover bg-slate-400 dark:bg-primary1"
    >
      <motion.div
        variants={navbar_variant}
        className="header-container absolute"
      >
        <Navbar />
      </motion.div>
    </motion.div>
  );
}
