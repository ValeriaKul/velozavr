import React from 'react'
import s from './style.module.css';
import { useTranslation } from "react-i18next";


export default function Services() {
  const { t } = useTranslation();
    const name = t('What do we offer');
    const text = t('In our workshop, you can perform comprehensive maintenance of the bike, repair and adjustment of all its components, tire fitting work. Timely maintenance of the bike helps to avoid many problems and expensive repairs. All work is done with quality and passion.');

  return (
    <div className={s.services}>
        <div className={s.info}>
            <p className={s.name}>{name}</p>
            <p className={s.text}>{text}</p>
        </div>
        <img src="/velozavr/images/bike.png" alt="bike"/>
    </div>
  )
}
