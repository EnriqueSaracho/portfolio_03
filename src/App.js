import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Checkers from "./pages/checkers";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkers" element={<Checkers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
