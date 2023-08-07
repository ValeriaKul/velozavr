import React from "react";
import s from "./style.module.css";
import Box from "../Box/Box";

export default function Services() {
  const services = [
    {
      id: 1,
      name: "Годовое ТО",
      background: "darkblue ",
    },
    {
      id: 2,
      name: "Выравниване колес",
      background: "blue",
    },
    {
      id: 3,
      name: "Настройка переключателей",
      background: "green",
    },
  ];
  return (
    <div className={s.container}>
      {services.map((el) => (
        <Box key={el.id} {...el} />
      ))}
    </div>
  );
}
