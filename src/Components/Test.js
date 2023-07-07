import { react } from "react";
import { motion } from "framer-motion";

const variants = {
  visible: {
    opacity: 1,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.9,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}
export default function poggi() {
  return (
    <div className = "flex relative left-4 w-fit">
      <motion.ul className = "list font-extrabold bg-purple-300" initial = "hidden" animate = "visible" variants={variants}>
        <motion.li/>option 1
        <motion.li/>option 2
        <motion.li/>option 3
        <motion.li/>option 4
      </motion.ul>
    </div>
  );
}
