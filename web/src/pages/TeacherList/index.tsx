import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import TeacherItem from "../../components/TeacherItem";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Esses são os proffys disponíveis">
        <form action="#" id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week">Dia da semana</label>
            <input type="text" id="week" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time" />
          </div>
        </form>
      </Header>

      <main>
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
