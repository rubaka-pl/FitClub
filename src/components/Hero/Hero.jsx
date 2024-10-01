import React from 'react'
import './hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import NumberCounter from 'number-counter'
import { motion } from 'framer-motion'
const Hero = () => {
    const transition = { typeof: 'spring', duration: 1.5 }
    const mobileTransition = window.innerWidth <= 768 ? true : false;
    return (
        <div className='hero'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobileTransition ? '125px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}>

                    </motion.div>
                    <span>najlepszy klub fitness w mieście</span>
                </div>
                {/* hero hading */}

                <div className="hero-text">
                    <div><span className='stroke-text'>Uformuj </span><span>Swoje</span></div>
                    <div><span>Idealne Ciało</span></div>
                    <div><span>Tutaj pomożemy Ci uformować i zbudować swoje idealne ciało oraz w pełni wykorzystać życie</span></div>
                </div>

                {/* FIGURES */}
                <div className="figures">
                    <div>
                        <span><NumberCounter end={140} start={100} delay='4' preFix='+' /></span><span>ekspertów trenerów</span>
                    </div>
                    <div>
                        <span><NumberCounter end={978} start={542} delay='4' preFix='+' /></span><span>członków dołączyło</span>
                    </div>
                    <div>
                        <span><NumberCounter end={55} start={22} delay='4' preFix='+' /></span><span>programów fitness</span>
                    </div>
                </div>
                {/* buttons */}
                <div className="hero-buttons">
                    <button className='btn'>Rozpocznij</button>
                    <button className='btn'>Dowiedz się więcej</button>
                </div>
            </div>
            <div className="right-h">
                <button className='btn'>Dołącz teraz</button>
                {/* heart block */}
                <motion.div className="heart-rate"
                    initial={{ right: '-1rem' }}
                    transition={transition}
                    whileInView={{ right: '0.8rem' }}>
                    <img src={heart} alt="heart-rate" />
                    <span>Heart Rate</span><span>116 bpm</span>
                </motion.div>

                {/* hero img */}
                <img className='hero-image' src={hero_image} alt="hero" />
                <motion.img
                    initial={{ right: '11rem' }}
                    transition={transition}
                    whileInView={{ right: '18rem' }}
                    className='hero-image-back' src={hero_image_back} alt="hero_background" />
                {/* calories */}
                <motion.div className="calories"
                    initial={{ right: '37rem' }}
                    transition={transition}
                    whileInView={{ right: '28rem' }}>
                    <img src={calories} alt="calories" />
                    <div>
                        <span>Spalone Kalorie</span><span>220 kcal</span>
                    </div>
                </motion.div>

            </div>
        </div >
    )
}

export default Hero