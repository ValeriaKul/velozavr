import React from 'react'
import s from './style.module.css';


export default function Banner() {
    const text1 = 'Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.';
    const text2 = 'А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.';

  return (
    <div className={s.banner}>
        <div className={s.text}>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
    </div>
  )
}
