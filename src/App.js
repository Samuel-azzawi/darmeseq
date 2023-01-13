import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <>
      <div className="App">
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
            <Route
              path="/about_en"
              element={
                <div>
                  <About />
                </div>
              }
            />
            <Route
              path="/contact-us_en"
              element={
                <div>
                  <ContactUs />
                </div>
              }
            />
            <Route
              path="/privacy-policy_en"
              element={
                <div>
                  <PrivacyPolicy />
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
      <footer>Copyright &copy; DARMESEQ. All Rights Reserved.</footer>
    </>
  );
}
export default App;
