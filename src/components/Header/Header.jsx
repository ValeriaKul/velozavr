import React from "react";
import s from "./style.module.css";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../hooks/use-localstorage";
import i18n from "../../i18n";

export default function Header() {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "ru");
  
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    localStorage.setItem("language", selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
  };


  console.log(language);


  return (
    <div className={s.header}>
      <img src="/images/logo.png" alt="logo" width="119" height="119" />
      <nav>
        <a className={s.link} href="/">
         {t('About us')}
        </a>
        <a className={s.link} href="/">
        {t('Services')}
        </a>
        <a className={s.link} href="/">
        {t('Rent')}
        </a>
      </nav>
      <button className={s.btn}>{t('Contact us')}</button>
      <select name="language" onChange={handleLanguageChange} value={language}>
        <option value="ru">{t('RUS')}</option>
        <option value="en">{t('ENG')}</option>
        <option value="ukr">{t('UKR')}</option>
      </select>
    </div>
  );
}
