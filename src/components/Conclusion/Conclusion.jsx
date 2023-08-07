import React from "react";
import s from "./style.module.css";

export default function Conclusion() {
  const name = "Прокат велосипедов";
  const text =
    "У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!";
  return (
    <div className={s.conclusion}>
      <img src="/images/bikes.png" alt="bikes" />
      <div className={s.info}>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
