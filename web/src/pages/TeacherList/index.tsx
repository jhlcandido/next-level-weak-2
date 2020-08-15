import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Select from "../../components/Select";

import "./styles.css";
import Input from "../../components/Input";
import api from "../../services/api";

function TeacherList() {
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");
  const [teachers, setTeachers] = useState([]);

  function searchTeachers(e: FormEvent) {
    e.preventDefault();

    api
      .get("classes", {
        params: {
          subject,
          week_day,
          time,
        },
      })
      .then((r) => {
        setTeachers(r.data);
      });
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form action="" id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Banco de Dados", label: "Banco de Dados" },
              { value: "Estrutura de dados", label: "Estrutura de Dados" },
              {
                value: "Sistemas Operacionais I",
                label: "Sistemas Operacionais I",
              },
            ]}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "1", label: "Terça-feira" },
              { value: "1", label: "Quarta-feira" },
              { value: "1", label: "Quinta-feira" },
              { value: "1", label: "Sexta-feira" },
              { value: "1", label: "Sabado" },
            ]}
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type="submit">Pesquisar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </main>
    </div>
  );
}

export default TeacherList;
