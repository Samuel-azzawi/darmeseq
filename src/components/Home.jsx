import "./Home.css";
import headLogo from "./photos/DarmeseqHeader.png";
import Dropdown from "./Dropdown.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <img
        onClick={() => {
          navigate("/");
        }}
        src={headLogo}
        alt="img"
        className="headLogo"
      />
      <Dropdown />
    </div>
  );
}

export default Home;
