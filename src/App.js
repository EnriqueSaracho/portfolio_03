import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Checkers from "./pages/checkers";
import Portfolio from "./pages/portfolio";
import GameList from "./pages/game-list";
import Calculator from "./pages/calculator";

/**
 * App page.
 * Uses React Router to navigate app.
 */
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Project pages */}
          <Route path="/checkers" element={<Checkers />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/game-list" element={<GameList />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
