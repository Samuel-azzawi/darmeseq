import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ContactUs from "./components/ContactUs";
import UserContext from "./UserContext/UserContext"
import { useState } from "react";
function App() {
  const [language, setLanguage] = useState("عربي");
  return (
    <UserContext.Provider value={{language, setLanguage}}>
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
    </UserContext.Provider>
  );
}
export default App;
