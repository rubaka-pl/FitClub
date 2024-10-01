import React from 'react'
import './programs.css'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Programs = () => {
    return (
        <div className='Programs' id='programs'>
            <div className="programs-header">
                <span className='stroke-text'>Odkryj nasze</span>
                <span>Programy</span>
                <span className='stroke-text'>aby ukształtować siebie</span>
            </div>
            <div className="program-categories">
                {programsData.map((program) => (
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now"><span>Join now</span><img src={RightArrow} alt="r-arrow" /></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs