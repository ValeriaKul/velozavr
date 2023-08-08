import React from 'react'
import s from './style.module.css';
import { useTranslation } from "react-i18next";



export default function AboutUs() {
  const { t } = useTranslation();
    const name = t('Bicycle workshop “Velozar”');
    const text = t('We, the masters of the Velozar bicycle workshop, are just the very happy people who were able to turn their passion and hobby into a profession. We ourselves love to ride and want your two-wheeled friend to bring you only joy and pleasure from riding.');
  return (
    <div className={s.aboutUs}>
        <div className={s.info}>
            <h3 className={s.name}>{name}</h3>
            <p className={s.descr}>{text}</p>
        </div>
        <img src="/images/dino.png" alt="dino" width="543"/>
    </div>
  )
}
