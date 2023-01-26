import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import headLogo from "./photos/DarmeseqHeader.png";
import fb from "./photos/fb.png";
import "./ContactUs.css";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";

function ContactUs() {
  const { language } = useContext(UserContext);
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
      {language === "عربي" ? (
        <>
          <p>
            at <b>Darmeseq</b>, we value your feedback and are dedicated to
            providing you with the best service possible. Our team of
            experienced professionals is ready to assist you with all your
            construction needs.
            <br />
            <br />
            If you have any questions or would like to request a quote for our
            services, please don't hesitate to reach out to us. We can be
            contacted through the following methods:
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
            Our friendly and knowledgeable team is available to answer any
            questions you may have and provide you with the information you need
            to make informed decisions about your construction project. We
            strive to respond to all inquiries within 24 hours during business
            days.
            <br />
            We appreciate your interest in <b>Darmeseq</b> and look forward to
            the opportunity to work with you.
            <br />
            <br />
            Thank you for choosing us as your construction partner.
          </p>{" "}
        </>
      ) : (
        <div className="arabicText">
          {" "}
          <p>
            في <b> دارمسيك</b> ، نحن نقدر ملاحظاتك ونكرس أنفسنا لتزويدك بأفضل
            خدمة ممكنة. لدينا فريق من المهنيين ذوي الخبرة على استعداد لمساعدتك
            في جميع احتياجات البناء الخاصة بك.
            <br />
            <br />
            إذا كانت لديك أي أسئلة أو ترغب في طلب عرض أسعار لخدماتنا ، فلا تتردد
            في التواصل معنا. يمكن التواصل معنا من خلال الطرق التالية:
          </p>
          <ul>
            <li>
              صفحتنا على الفيسبوك :
              <a
                target="_blank"
                href="https://www.facebook.com/Darmeseqcodev"
                rel="noreferrer"
              >
                <img src={fb} alt="Facebook" className="fb_img" />
              </a>
            </li>
            <li>
              البريد الإلكتروني :
              <button
                className="drop-down-button"
                onClick={() => (window.location = "mailto:info@darmeseq.com")}
              >
                info@darmeseq.com
              </button>
            </li>
          </ul>
          <p>
            يتوفر فريقنا الودود والمطلّع للإجابة على أي أسئلة قد تكون لديك
            وتزويدك بالمعلومات التي تحتاجها لاتخاذ قرارات مستنيرة بشأن مشروع
            البناء الخاص بك. نسعى جاهدين للرد على جميع الاستفسارات في غضون 24
            ساعة خلال أيام العمل.
            <br />
            نحن نقدر اهتمامك بـ <b>دارمسيك</b> ونتطلع إلى فرصة العمل معك.
            <br />
            <br />
            شكرا لاختيارك لنا كشريك في البناء.
          </p>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
