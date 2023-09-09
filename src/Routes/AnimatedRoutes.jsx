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
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="root-container min-h-screen  bg-primary-background1 dark:bg-primary-background2 transition-all duration-100">
        <Navbar />
        <AnimatePresence mode={"sync"} initial={false}>
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
