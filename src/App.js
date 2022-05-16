import "./App.css";

import { Route, Routes } from "react-router-dom";

import End from "./pages/End";
import Game from "./pages/Game";
import HighScroes from "./pages/HighScores";
import HomePage from "./pages";
import Select from "./pages/Select";

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
