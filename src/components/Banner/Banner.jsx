import React from 'react'
import s from './style.module.css';
import { useTranslation } from "react-i18next";


export default function Banner() {
  const { t } = useTranslation();
    const text1 = t('Having come to us once, many of our customers become regulars, and some of them even become friends.');
    const text2 = t('You can also repair electric scooters and electric bicycles in our workshop.');

  return (
    <div className={s.banner}>
        <div className={s.text}>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
    </div>
  )
}
