import React from "react";
import s from "./style.module.css";
import Box from "../Box/Box";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      name: `${t("Annual maintenance")}`,
      background: "darkblue ",
    },
    {
      id: 2,
      name: `${t("Wheel alignment")}`,
      background: "blue",
    },
    {
      id: 3,
      name: `${t("Switch settings")}`,
      background: "green",
    },
  ];
  return (
    <a name="services">
      <div className={s.container}>
        {services.map((el) => (
          <Box key={el.id} {...el} />
        ))}
      </div>
    </a>
  );
}
