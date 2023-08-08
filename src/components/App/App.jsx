import React from 'react'
import s from './style.module.css';
import Header from '../Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Info from '../Info/Info';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Conclusion from '../Conclusion/Conclusion';

export default function App() {

  return (
    <div className={s.page}>
        <Header/>
        <AboutUs/>
        <Info/>
        <Banner/>
        <Services/>
        <Conclusion/>
    </div>
  )
}
