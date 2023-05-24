import Navbar from "./Components/Navbar.js";
import "./Components/Navbar.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class = "bg-person-wrapper"><span id = "cons">UNDER CONSTRUCTION</span><img src = {require("./Components/Icons/tony.png")} class="bg-person" /></div>
    </div>
  );
}

export default App;
