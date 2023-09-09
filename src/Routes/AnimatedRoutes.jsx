import Navbar from "../Components/Navbar.js";
import "../Styles/Navbar.css";
import "../Styles/Styles.css";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Projects from "./Projects.jsx";
import Home from "./Home.jsx";
import { useTheme } from "next-themes";
import { useLocation } from "react-router-dom";
import DarkModeButton from "../Components/DarkMode.js";

const AnimatedRoutes = () => {
  const location = useLocation();
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  if (currentTheme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
  return (
<<<<<<< HEAD
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="root-container min-h-screen  bg-primary-background1 dark:bg-primary-background2 transition-all duration-100">
        <Navbar />
        <AnimatePresence mode={"sync"} initial={false}>
=======
    <div class="root-container">
      <ThemeProvider enableSystem={true} attribute="class">
        <div className="header-container">
          <Navbar />
        </div>
        <AnimatePresence inital = {false} mode="sync">
>>>>>>> 10f9964083fce957c7fdf4ed5c26326b786a66fc
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="Projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
        <div className="fixed bottom-10 right-10">
          <DarkModeButton />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AnimatedRoutes;
