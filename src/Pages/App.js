import Navbar from "../Components/Navbar.js";
import "../Components/Navbar.css";
import "../Styles/App.css";
import { NextUIProvider } from "@nextui-org/react";
import { Card, Text } from "@nextui-org/react";



function App() {
  return (
    <NextUIProvider>
      <div className="root-container">
        <div class="header-container">
          <Navbar />
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
