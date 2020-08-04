import React from "react";

import logoContainer from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/icons/study.svg";
import giveClassesIcon from "../../assets/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/icons/purple-heart.svg";
import "./styles.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoContainer} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img src={landingImg} alt="Estudos" className="hero-image" />

        <div className="buttons-container">
          <a href="/" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>

          <a href="/" className="give-class">
            <img src={giveClassesIcon} alt="Dar aula" />
            Dar aula
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
