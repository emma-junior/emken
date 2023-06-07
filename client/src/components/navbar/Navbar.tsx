import React,{useState, useEffect, useContext} from 'react'
import Button from '../button/Button';
import "./navbar.scss"
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import { AuthContext } from '../../context/AuthContext';

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

    const {currentUser, dispatch} = useContext(AuthContext)
    const logOut = () => {
        dispatch({type:"LOGIN"})
    }


    const handleClick = () => setClick(!click)

    useEffect(() => {
		window.addEventListener("scroll", changeColor);
  }, [])
  return (
    <nav className={color ? 'navbar navbar-bg' : 'navbar'}>
        <div className='navbar-wrapper'>
            <Logo />
            <div className={click ? 'show-sidebar' : 'nav-links'}>
                <ul>
                    <li>HOME</li>
                    <li>MEDICAL EMERGENCY</li>
                    <li>FIND HOSPITAL</li>
                    <Link to="/chat"><li>CHAT WITH DOCTOR</li></Link>
                </ul>
                {currentUser ? <div><div onClick={logOut} className='login-btn-wrapper'><Button size = 'medium' label="Log Out" /></div></div>
                :<div className='signup-login'>
                    <p className='signup'>Sign Up</p>
                    <Link to="/login"><div className='login-btn-wrapper'><Button size = 'medium' label="Log In" /></div></Link>
                </div>
                }
            </div>
            <div className='mobile-icon' onClick={handleClick}>
                {!click ?  <FaBars /> : <FaTimes />}
            </div>
        </div>
    </nav>
  )
}

export default Navbar