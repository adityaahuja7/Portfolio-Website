import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

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

  const themeChanger = () => {
    if (!mounted) return null;
    const currentTheme = (theme === "system") ? systemTheme : theme;
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    console.log(currentTheme);
  };

  return (
    <div
      className="dark-button rounded-md w-12 h-12 border-2 border-slate-950 p-1 dark:border-orange-200 transition-all duration-200"
      role="button"
      onClick={themeChanger}
    >
      <img src={theme === "dark" ? paths.light : paths.dark}></img>
    </div>
  );
};

export default DarkMode;
