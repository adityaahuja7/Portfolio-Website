import Navbar from "../Components/Navbar.js";
import DarkMode from "../Components/DarkMode.js";
import "../Components/Navbar.css";
import "../Styles/App.css";
import { ThemeProvider } from "next-themes";

function App() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="root-container bg-primary dark:bg-darkModeprimary transition-all duration-300">
        <div className="header-container">
          <Navbar />
        </div>
        <div className="dark-mode-container absolute bottom-10 right-10">
          <DarkMode />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
