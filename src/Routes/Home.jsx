import { motion } from "framer-motion";
import "../Styles/Navbar.css";


function Home() {
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
      className="home-container overflow-hidden h-screen w-screen absolute bg-green-500 dark:bg-primary1"
    >
      <h1>HOME</h1>
    </motion.div>
  );
}

export default Home;
