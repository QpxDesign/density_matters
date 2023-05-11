
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import HomePage from "./pages/HomePage"; 
import SourcePage from "./pages/SourcePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sources" element={<SourcePage />} />
      </Routes>
    </Router>
  );
}

export default App;
