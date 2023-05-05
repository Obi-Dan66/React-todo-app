import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pokemon from "./pages/pokemon";
import Home from "./pages/home";
import FetchAnything from "./pages/fetcher";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <h1>
            Todo App & Pokemon finder tool
          </h1>
        </div>
        <nav>
          <ul>
            <div>
              <Link to="/">Homepage</Link>
              <div>
              </div>
              <Link to="/pokemon">Pokemon Lucky Search</Link>
              <div>
              </div>
              <Link to="/fetch">Pokemon Wiki</Link>
              </div>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/fetch" element={<FetchAnything />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;