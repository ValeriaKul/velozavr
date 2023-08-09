import React, { useState } from "react";
import s from "./style.module.css";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../hooks/use-localstorage";
import i18n from "../../i18n";
import Modal from "../Modal/Modal";
import { BiLogoGmail, BiPhone } from "react-icons/bi";

export default function Header() {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "ru");

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    localStorage.setItem("language", selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
  };

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={s.header}>
      <img src="/velozavr/images/logo.png" alt="logo" width="119" height="119" />
      <nav>
        <a className={s.link} href="#about_us">
          {t("About us")}
        </a>
        <a className={s.link} href="#services">
          {t("Services")}
        </a>
        <a className={s.link} href="#services">
          {t("Rent")}
        </a>
      </nav>
      <button className={s.btn} onClick={() => setModalActive(true)}>
        {t("Contact us")}
      </button>
      <select name="language" onChange={handleLanguageChange} value={language}>
        <option value="ru">{t("RUS")}</option>
        <option value="en">{t("ENG")}</option>
        <option value="ukr">{t("UKR")}</option>
      </select>
      {/* <Modal active={modalActive} setActive={setModalActive}/> */}
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={s.modal__frame}>
          <p className={s.modal__comtacts}>{t('Contacts')}</p>
          <div className={s.modal__mail}>
            <BiLogoGmail />
            <a href="mailto:velozar@gmail.com">velozar@gmail.com</a>
          </div>
          <div className={s.modal__phone}>
            <BiPhone />
            <a href="tel:+37120123456">+37120123456</a>
          </div>
          <button className={s.btn_close} onClick={() => setModalActive(false)}>
            X
          </button>
        </div>
      </Modal>
    </div>
  );
}
