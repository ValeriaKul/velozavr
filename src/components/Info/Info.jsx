import React from 'react'
import s from './style.module.css';


export default function Services() {
    const name = 'Что мы предлагаем';
    const text = 'В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой.';

  return (
    <div className={s.services}>
        <div className={s.info}>
            <p className={s.name}>{name}</p>
            <p className={s.text}>{text}</p>
        </div>
        <img src="/images/bike.png" alt="bike" width="520" height="604"/>
    </div>
  )
}
