import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import headLogo from "./photos/DarmeseqHeader.png";
import fb from "./photos/fb.png";
import "./ContactUs.css";

function ContactUs() {
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
      <p>
        at <b>Darmeseq</b>, we value your feedback and are dedicated to
        providing you with the best service possible. Our team of experienced
        professionals is ready to assist you with all your construction needs.
        <br />
        <br />
        If you have any questions or would like to request a quote for our
        services, please don't hesitate to reach out to us. We can be contacted
        through the following methods:
      </p>
      <ul>
        <li>
          Facebook page:
          <a
            target="_blank"
            href="https://www.facebook.com/Darmeseqcodev"
            rel="noreferrer"
          >
            <img src={fb} alt="Facebook" className="fb_img" />
          </a>
        </li>
        <li>
          E-mail:{" "}
          <button
            className="drop-down-button"
            onClick={() => (window.location = "mailto:info@darmeseq.com")}
          >
            info@darmeseq.com
          </button>
        </li>
      </ul>
      <p>
        Our friendly and knowledgeable team is available to answer any questions
        you may have and provide you with the information you need to make
        informed decisions about your construction project. We strive to respond
        to all inquiries within 24 hours during business days.
        <br />

        We appreciate your interest in <b>Darmeseq</b> and look forward to the
        opportunity to work with you.
        <br />
        <br />
        Thank you for choosing us as your construction partner.
      </p>
    </div>
  );
}

export default ContactUs;
