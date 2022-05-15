import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages";
import HighScroes from "./pages/HighScores";
import Game from "./pages/Game";
import End from "./pages/End";
import Select from "./components/Select";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/highscores" element={<HighScroes />} />
        <Route path="/game" element={<Game />} />
        <Route path="/complete" element={<End />} />
        <Route path="/select" element={<Select />} />
      </Routes>
    </div>
  );
}

export default App;
