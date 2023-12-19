import React,{useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
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

    const navigate = useNavigate();

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
            <div onClick={() => navigate("/")}><Logo /></div>
            <div className={click ? 'show-sidebar' : 'nav-links'}>
                <ul>
                    <li onClick={() => navigate("/")}>HOME</li>
                    <li onClick={() => navigate("/medical-emergency")}>MEDICAL EMERGENCY</li>
                    <li onClick={nearbyHospital}>FIND HOSPITAL</li>
                    <li onClick={() => navigate("/chat-with-doctor")}>CHAT WITH DOCTOR</li>
                </ul>
                {currentUser || isLoggedIn ? <div className='signup-login'>
                    <p className='signup user'>{currentUser?.displayName || "John"}</p>
                    <div onClick={() => signOut(auth)} className='login-btn-wrapper'><Button size = 'medium' label="Log Out" /></div>
                    </div>
                    :<div className='signup-login'>
                        <p onClick={() => navigate("/register")} className='signup'>Sign Up</p>
                        <div onClick={() => navigate("/login")} className='login-btn-wrapper'><Button size = 'medium' label="Log In" /></div>
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