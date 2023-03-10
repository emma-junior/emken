import React,{useState, useEffect} from 'react'
import Button from '../button/Button';
import "./navbar.scss"
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    const [color, setColor] = useState<boolean>(false);
    const [click, setClick] = useState<boolean>(false);

    const changeColor = () => {
        if (window.scrollY >= 1) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    const handleClick = () => setClick(!click)

    useEffect(() => {
		window.addEventListener("scroll", changeColor);
  }, [])
  return (
    <nav className={color ? 'navbar navbar-bg' : 'navbar'}>
        <div className='navbar-wrapper'>
            <h3>EMKEN</h3>
            <div className={click ? 'show-sidebar' : 'nav-links'}>
                <ul>
                    <li>HOME</li>
                    <li>MEDICAL EMERGENCY</li>
                    <li>FIND HOSPITAL</li>
                    <li>CHAT WITH DOCTOR</li>
                </ul>
                <div className='signup-login'>
                    <p className='signup'>Sign Up</p>
                    <Button text="Log In" />
                </div>
            </div>
            <div className='mobile-icon' onClick={handleClick}>
                {!click ?  <FaBars /> : <FaTimes />}
            </div>
        </div>
    </nav>
  )
}

export default Navbar