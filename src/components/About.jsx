import headLogo from "./photos/DarmeseqHeader.png";
import React, { useState } from "react";
import "./About.css";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";

function About() {
  const [isOpenGoal, setIsOpenGoal] = useState(false);
  const [isOpenTeam, setIsOpenTeam] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [isOpenGoalA, setIsOpenGoalA] = useState(false);
  const [isOpenTeamA, setIsOpenTeamA] = useState(false);
  const [isOpenServicesA, setIsOpenServicesA] = useState(false);
  const { language } = useContext(UserContext);

  const navigate = useNavigate();

  const goal = () => {
    setIsOpenGoal(!isOpenGoal);
  };
  const team = () => {
    setIsOpenTeam(!isOpenTeam);
  };
  const services = () => {
    setIsOpenServices(!isOpenServices);
  };
  const goalA = () => {
    setIsOpenGoalA(!isOpenGoalA);
  };
  const teamA = () => {
    setIsOpenTeamA(!isOpenTeamA);
  };
  const servicesA = () => {
    setIsOpenServicesA(!isOpenServicesA);
  };

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
        <ul className="dropdown-menu__list">
          <li className="dropdown-menu__item">
            <button onClick={goal} className="drop-down-button">
              Our goal
            </button>
          </li>
          {isOpenGoal && (
            <p>
              To be a reliable, leading construction company that provides
              innovative solutions to secure construction with high quality and
              competitive prices
            </p>
          )}
          <li className="dropdown-menu__item">
            <button onClick={team} className="drop-down-button">
              Our team
            </button>
          </li>
          {isOpenTeam && (
            <p>
              A group of highly experienced engineers and technicians. We always
              strive to achieve leadership in the real estate market by
              providing the highest quality standards in inimitable designs for
              residential real estate and to present our business within a
              framework of innovation, flexibility and creativity. We mainly
              seek to provide the best solutions to secure housing for the
              distressed families And always ready to provide assistance to the
              organizations working in the humanitarian field, within the
              framework of supervision and innovative proposal to find
              solutions.
            </p>
          )}
          <li className="dropdown-menu__item">
            <button onClick={services} className="drop-down-button">
              Our services
            </button>
          </li>
          {isOpenServices && (
            <ul>
              <li>General Contracting</li>
              <li>Electricity works</li>
              <li>Sanitation and drinking water works</li>
              <li>Road works</li>
              <li>Bridges works</li>
              <li>Providing all building materials</li>
              <li>
                Building camps at the appropriate cost (within safety
                conditions)
              </li>
              <li>
                Building affordable homes for the displaced and people with
                limited income
              </li>
            </ul>
          )}
        </ul>
      ) : (
        <ul className="dropdown-menu__list">
          <li className="dropdown-menu__item">
            <button onClick={goalA} className="drop-down-button">
              هدفنا
            </button>
          </li>
          {isOpenGoalA && (
            <p>
              ان نكون شركة بناء رائدة موثوق بها تقدم حلولا مبتكرة لتأمين البناء
              ضمن جودة عالية وبأسعار منافسة
            </p>
          )}
          <li className="dropdown-menu__item">
            <button onClick={teamA} className="drop-down-button">
              فريقنا
            </button>
          </li>
          {isOpenTeamA && (
            <p>مجموعة من المهندسين والفنيين أصحاب الخبرة العالية</p>
          )}
          <li className="dropdown-menu__item">
            <button onClick={servicesA} className="drop-down-button">
              خدماتنا
            </button>
          </li>
          {isOpenServicesA && (
            <ul>
              <li>المقاولات العامة</li>
              <li>اعمال الكهرباء</li>
              <li>اعمال الصرف الصحي واعمال مياه الشرب</li>
              <li>اعمال الطرقات</li>
              <li>اعمال الجسور</li>
              <li>توفير جميع مواد البناء</li>
              <li>بناء مخيمات بالكلفة المناسبة (ضمن شروط السلامة)</li>
              <li>بناء بيوت بأسعار مناسبة للنازحين وأصحاب الدخل المحدود</li>
            </ul>
          )}
        </ul>
      )}
    </div>
  );
}
export default About;
