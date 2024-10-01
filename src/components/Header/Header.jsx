import React, { useState } from 'react'
import './header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'
const Header = () => {

    const mobileTransition = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false)
    return (
        <div
            onClick={() => setMenuOpened(true)}
            className='header' >
            <img className='logo' src={Logo} alt="logo" />
            {
                (menuOpened === false && mobileTransition === true) ? (
                    <div style={{
                        backgroundColor: 'var(--appColor)',
                        padding: '0.5rem',
                        borderRadius: '5px'
                    }}><img src={Bars} alt="menu" style={{ width: '1.5rem', height: '1.5rem' }} /></div>
                ) : (
                    <ul className='header-menu'>
                        <li ><Link onClick={() => setMenuOpened(false)} activeClass='active' to='hero' span={true} smooth={true} >Strona główna</Link></li>
                        <li ><Link onClick={() => setMenuOpened(false)} to='programs' span={true} smooth={true}>Programy</Link></li>
                        <li ><Link onClick={() => setMenuOpened(false)} to='reasons' span={true} smooth={true}>Dlaczego my</Link></li>
                        <li ><Link onClick={() => setMenuOpened(false)} to='plans-container' span={true} smooth={true}>Plany</Link></li>
                        <li ><Link onClick={() => setMenuOpened(false)} to='testimonials' span={true} smooth={true}>Opinie</Link></li>
                    </ul>
                )
            }
        </div >
    )
}

export default Header