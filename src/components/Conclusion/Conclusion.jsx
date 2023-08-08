import React from "react";
import s from "./style.module.css";
import { useTranslation } from "react-i18next";

export default function Conclusion() {
  const { t } = useTranslation();
  const name = t("Bicycles for rent");
  const text = t(
    "You can rent well-maintained and tuned bikes from us. We are in a beautiful park!"
  );

  return (
    <div className={s.conclusion}>
      <img src="/velozavr/images/bikes.png" alt="bikes" />
      <div className={s.info}>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
