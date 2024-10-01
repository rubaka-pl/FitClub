import React from 'react'
import './reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
const Reasons = () => {
    return (
        <section className="Reasons" id='reasons'>
            <div className="left-r">
                <img src={image1} alt="#" />
                <img src={image2} alt="#" />
                <img src={image3} alt="#" />
                <img src={image4} alt="#" />
            </div>
            <div className="right-r"><span>Kilka powodów</span>
                <div>
                    <span className='stroke-text'>dlaczego</span>
                    <span> warto wybrać nas?</span>
                </div>
                <div className='details-r'>
                    <div>
                        <img src={tick} alt="#" />
                        <span>PONAD 140 EKSPERTÓW TRENERÓW</span>
                    </div>
                    <div>
                        <img src={tick} alt="#" />
                        <span>Ćwicz w dobrej cenie - tyle, ile potrzebujesz.<br /> Bez umów i opłat członkowskich.</span>
                    </div>
                    <div>
                        <img src={tick} alt="#" />
                        <span>1 DARMOWY PROGRAM DLA NOWYCH CZŁONKÓW</span>
                    </div>
                    <div>
                        <img src={tick} alt="#" />
                        <span>WIARYGODNI PARTNERZY</span>
                    </div>
                </div>
                <span className='right-r--span'>OUR PARTNERS</span>
                <div className="partners">
                    <img src={nb} alt="nb" />
                    <img src={adidas} alt="adidas" />
                    <img src={nike} alt="nike" /></div>
            </div>
        </section>
    )
}

export default Reasons