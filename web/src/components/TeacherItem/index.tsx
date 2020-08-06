import React from "react";
import whatsappIcon from "../../assets/icons/whatsapp.svg";
import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/7047049?s=460&u=814d3be9d01478ca6a55c1906d498c7454cf4361&v=4"
          alt="User"
        />
        <div>
          <strong>Bruna</strong>
          <span>Javascript</span>
        </div>
      </header>
      <p>
        A certificação de metodologias que nos auxiliam a lidar com a contínua
        expansão de nossa
        <br />
        atividade prepara-nos para enfrentar situações atípicas decorrentes dos
        modos de operação convencionais.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong> R$220,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Entrar em contato" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
