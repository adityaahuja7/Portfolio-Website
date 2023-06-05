import Navbar from "../Components/Navbar.js";
import DarkMode from "../Components/DarkMode.js";
import "../Styles/Navbar.css";
import "../Styles/App.css";
import { ThemeProvider } from "next-themes";

function App() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="root-container bg-blobLight dark:bg-blobDark transition-all delay-100 duration-200 linear">
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
