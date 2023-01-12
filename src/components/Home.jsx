import "./Home.css";
import headLogo from "./photos/DarmeseqHeader.png";
import Dropdown from "./Dropdown.jsx";

function Home() {
  return (
    <div className="app">
      <img src={headLogo} alt="img" className="headLogo" />
      <Dropdown />
    </div>
  );
}

export default Home;
