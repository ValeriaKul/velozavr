import React from 'react'
import s from './style.module.css';

export default function Header() {
  return (
    <div className={s.header}>
        <img src="/images/logo.png" alt="logo" width="119" height="119"/>
        <nav>
            <a className={s.link} href="/">O нас</a>
            <a className={s.link} href="/">Услуги</a>
            <a className={s.link} href="/">Аренда</a>
        </nav>
        <button className={s.btn}>Связаться</button>
    </div>
  )
}
