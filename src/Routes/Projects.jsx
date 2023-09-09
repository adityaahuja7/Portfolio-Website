import { motion } from "framer-motion";
import "../Styles/Navbar.css";
import HomeImg from "../Images/thumbs.png";


function Home() {
  let variant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={variant}
      transition={{ type: "easeIn", duration: 0.4 }}
      className="projects-container fixed flex flex-col items-center justify-around"
    >
      <section id="projects" className = "w-full flex justify-center">
        PROJECTS
      </section>
    </motion.div>
  );
}

export default Home;
