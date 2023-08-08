import React from 'react'
import s from './style.module.css';

export default function Box({name, background}) {
    const style = ['box', background].join(' ');
  return (
    <div className={style}>
        <img src="/velozavr/images/Rectangle.png" alt="rect" width='340'/>
        <p className={s.text}>{name}</p>
    </div>
  )
}
