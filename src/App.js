import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
function App() {
  const [user, setUser] = useState("");
  return (
    <BrowserRouter>
      <nav>
        <Link to="/reviews"></Link>
        <Link to="/reviews/:id"></Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
            </div>
          }
        />
        <Route path="/reviews/:id" element={<div></div>} />
        <Route path="/reviews" element={<div></div>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
