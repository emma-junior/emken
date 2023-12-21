import React,{useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import "./navbar.scss"
import {FaBars, FaTimes} from "react-icons/fa"
import { AuthContext } from '../../hooks/AuthContext';
import {getAuth} from "firebase/auth"
import {app} from '../../firebaseConfig'
import { signOut } from 'firebase/auth';
import Logo from '../logo/Logo';
import { nearbyHospital } from '../../helper/helper';

const Navbar = ({isLoggedIn = false}) => {
    //isLoggedIn was introduced because of storybook

    const auth = getAuth(app)
    const {currentUser} = useContext(AuthContext)

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
            <Link to="/"><Logo /></Link>
            <div className={click ? 'show-sidebar' : 'nav-links'}>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/medical-emergency">MEDICAL EMERGENCY</Link></li>
                    <li onClick={nearbyHospital}>FIND HOSPITAL</li>
                    <li><Link to="/chat-with-doctor">CHAT WITH DOCTOR</Link></li>
                </ul>
                {currentUser || isLoggedIn ? <div className='signup-login'>
                    <p className='signup user'>{currentUser?.displayName || "John"}</p>
                    <div onClick={() => signOut(auth)} className='login-btn-wrapper'><Button size = 'medium' label="Log Out" /></div>
                    </div>
                    :<div className='signup-login'>
                        <Link to="/register"><p className='signup'>Sign Up</p></Link>
                        <div className='login-btn-wrapper'>
                            <Link to="/login"><Button size = 'medium' label="Log In" /></Link>
                        </div>
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