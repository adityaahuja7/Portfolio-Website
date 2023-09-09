import { motion } from "framer-motion";
import "../Styles/Navbar.css";
import HomeImg from "../Images/thumbs.png";


function Home() {
  let variant = {
    hidden: {
      opacity: 0.5,
    },
    show: {
      opacity: 1,
    },
    exit: {
<<<<<<< HEAD
      opacity: 0,
=======
      opacity: 0.5,
>>>>>>> 10f9964083fce957c7fdf4ed5c26326b786a66fc
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={variant}
<<<<<<< HEAD
      transition={{ type: "easeIn", duration: 0.4 }}
      className="projects-container fixed flex flex-col items-center justify-around"
=======
      transition={{ duration: 0.3 }}
      className="project-container overflow-hidden h-screen w-screen absolute bg-primary-background1 dark:bg-primary-background2"
>>>>>>> 10f9964083fce957c7fdf4ed5c26326b786a66fc
    >
      <section id="projects" className = "w-full flex justify-center">
        PROJECTS
      </section>
    </motion.div>
  );
}

export default Home;
