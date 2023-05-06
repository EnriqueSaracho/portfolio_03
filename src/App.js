import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Checkers from "./pages/checkers";
import Portfolio from "./pages/portfolio";
import GameList from "./pages/game-list";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkers" element={<Checkers />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/game-list" element={<GameList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
