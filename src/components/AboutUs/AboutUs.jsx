import React from 'react'
import s from './style.module.css';


export default function AboutUs() {
    const name = 'Веломастерская “Велозар”';
    const text = 'Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.'
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
