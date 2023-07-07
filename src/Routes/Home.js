import Navbar from "../Components/Navbar.js";
import DarkMode from "../Components/DarkMode.js";
import "../Styles/Navbar.css";
import "../Styles/Home.css";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

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

const darkMode_variant = {
  hidden: { x: 100 },
  show: { x: 0 },
  exit: { x: 200 },
};

function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  if (currentTheme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <motion.div
        initial="hidden"
        animate="show"
        exit="exit"
        variants={variants}
        className="root-container aspect-video bg-cover bg-primary2 dark:bg-primary1"
      >
        <motion.div
          variants={navbar_variant}
          className="header-container absolute"
        >
          <Navbar />
        </motion.div>

        <motion.div
          variants={darkMode_variant}
          className="dark-mode-container absolute bottom-10 right-10"
        >
          <DarkMode />
        </motion.div>
      </motion.div>
    </ThemeProvider>
  );
}

export default Home;
