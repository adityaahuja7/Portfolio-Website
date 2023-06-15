import Navbar from "../Components/Navbar.js";
import DarkMode from "../Components/DarkMode.js";
import TiltCard from "../Components/TiltCard.jsx";
import Carousel from "../Components/Carousel.jsx";
import "../Styles/Navbar.css";
import "../Styles/Home.css";
import { ThemeProvider } from "next-themes";
import TopLeftHome from "../SVGs/Competition.svg";

const greeting_card_1 = () => {
  return <div className="greeting-content wave-emoji wave">👋</div>;
};
const greeting_card_2 = () => {
  return <span className="greeting-content">👋</span>;
};
const greeting_card_3 = () => {
  return <span className="greeting-content">👋</span>;
};

const greeting_content = [greeting_card_1, greeting_card_2, greeting_card_3];

function App() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="root-container  aspect-video bg-cover bg-no-repeat bg-blobLight dark:bg-blobDark transition-all delay-100 duration-200 linear">
        <div className="header-container">
          <Navbar />
        </div>
        <div className="greeting-container hover:cursor-pointer absolute left-1/2 top-1/2">
          <Carousel content={greeting_content} />
        </div>
        <div className="dark-mode-container absolute bottom-10 right-10">
          <DarkMode />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
