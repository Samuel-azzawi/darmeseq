import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import PrivacyPolicy from "./components/PrivacyPolicy";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
            </div>
          }
        />
        <Route path="/about" element={<div><About/></div>} />
        <Route path="/contact-us" element={<div></div>} />
        <Route path="/privacy-policy" element={<div><PrivacyPolicy/></div>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
