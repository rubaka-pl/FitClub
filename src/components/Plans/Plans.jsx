import React from 'react'
import './plans.css'
import whiteThick from '../../assets/whiteTick.png'
import { plansData } from '../../data/plansData'
const Plans = () => {
    return (
        <div className="plans-container">
            <div className="blur plans-blur-first"></div>
            <div className="blur plans-blur-second"></div>
            <div className="programs-header">
                <span className='stroke-text'>CZAS ZACZĄĆ</span>
                <span>SWOJĄ DROGĘ</span>
                <span className='stroke-text'>ZACZNIJ Z NAMI</span>
            </div>

            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className='features'>
                            {plan.features.map((feature, i) => (
                                <div className='feature' key={i}>
                                    <img src={whiteThick} alt="#" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div><span>See more benefits -></span></div>
                        <button className='btn'>Join now</button>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Plans