import Navbar from "../Components/Navbar.js";
import "../Styles/Navbar.css";
import "../Styles/Home.css";
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
    <div class="root-container">
      <ThemeProvider enableSystem={true} attribute="class">
        <div className="header-container">
          <Navbar />
        </div>
        <AnimatePresence mode="sync">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="Projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
        <div className="absolute bottom-10 right-10">
          <DarkModeButton />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default AnimatedRoutes;
