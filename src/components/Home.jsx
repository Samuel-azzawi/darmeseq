import "./Home.css";
import headLogo from "./photos/DarmeseqHeader.png";
import Dropdown from "./Dropdown.jsx";
import { useNavigate } from "react-router-dom";
import Gallery from "./Gallery";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";

function Home() {
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
      <div className="mainPageShow">
        {language === "عربي" ? (
          <div className="home_info">
            <p>
              At Darmeseq, we understand the importance of quality construction
              and the role it plays in shaping our communities. As a
              full-service contractor, we are committed to providing
              unparalleled construction services to our clients. Our team of
              experienced professionals possess the knowledge and expertise
              necessary to take on any project, regardless of its complexity or
              size.
            </p>
            <p>
              We pride ourselves on our ability to deliver projects on time and
              within budget, while also maintaining the highest level of safety
              and quality. Our dedication to excellence is evident in every
              aspect of our work, from the planning stages to the final stages
              of construction.
            </p>
            <p>
              In addition to our traditional construction services, Darmeseq is
              also dedicated to addressing the pressing issue of affordable
              housing. We understand the importance of providing safe and
              affordable housing for the displaced and people with limited
              income. Our team is dedicated to creating sustainable and
              cost-effective solutions to meet the housing needs of these
              communities.
            </p>
            <p>
              At Darmeseq, we are dedicated to providing our clients with the
              highest level of service and ensuring that their projects are
              completed to their complete satisfaction. We invite you to explore
              our website and contact us to learn more about how we can assist
              you with your next construction project. Our team is ready to work
              closely with you to understand your specific needs and design a
              solution that is tailored to your specific requirements.
            </p>
          </div>
        ) : (
          <div className="home_info arabicText">
            <p>
              نسعى دائما لتحقيق الريادة في السوق العقاري من خلال تقديم أعلى
              معايير الجودة في التصاميم الفذة للعقارات السكنية وان نقدم اعمالنا
              بإطار من الابتكار والمرونة والابداع
            </p>
            <p>
              كما نسعى بشكل رئيسي لتقديم الحلول المناسبة لتأمين السكن للعوائل
              المنكوبة
            </p>
            <p>
              وعلى استعداد دائم لتقديم المساعدة للهيئات والمنظمات العاملة في
              المجال الإنساني ضمن إشراف وطرح مبتكر لإيجاد الحلول.
            </p>
          </div>
        )}

        <div className="galleryContainer">
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default Home;
