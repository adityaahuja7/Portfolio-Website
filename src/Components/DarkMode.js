import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion} from "framer-motion";

const DarkMode = () => {
  const paths = {
    light: require("../Icons/lightmode.png"),
    dark: require("../Icons/darkmode.png"),
  };
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();

  const themeChanger = (e) => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    console.log(currentTheme);
  };

  return (
    <motion.div
      className="dark-button w-12 h-12 select-none"
      whileTap={{rotate: -180}}
      role="button"
      onClick={themeChanger}
    >
      <motion.img src={theme === "dark" ? paths.light : paths.dark} onClick={themeChanger}></motion.img>
    </motion.div>
  );
};

export default DarkMode;
