import React,{useState, useEffect, useContext} from 'react'
import Button from '../button/Button';
import "./navbar.scss"
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import { AuthContext } from '../../context/AuthContext';
import {getAuth} from "firebase/auth"
import {app} from '../../firebaseConfig'
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const auth = getAuth(app)
    const [color, setColor] = useState<boolean>(false);
    const [click, setClick] = useState<boolean>(false);

    const changeColor = () => {
        if (window.scrollY >= 1) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    const {currentUser} = useContext(AuthContext)


    const handleClick = () => setClick(!click)

    useEffect(() => {
		window.addEventListener("scroll", changeColor);
    }, [])
    const nearbyHospital = () => {
        const encodedSearchWord = encodeURIComponent("emergencies health");
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedSearchWord}`;
        window.open(mapsUrl);
    };
  return (
    <nav className={color ? 'navbar navbar-bg' : 'navbar'}>
        <div className='navbar-wrapper'>
            <Link to="/"><Logo /></Link>
            <div className={click ? 'show-sidebar' : 'nav-links'}>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/medical-emergency">MEDICAL EMERGENCY</Link></li>
                    <li onClick={nearbyHospital}>FIND HOSPITAL</li>
                    <li ><Link to="/chat-with-doctor">CHAT WITH DOCTOR</Link></li>
                </ul>
                {currentUser ? <div className='signup-login'>
                    <p className='signup user'>{currentUser.displayName}</p>
                    <div onClick={() => signOut(auth)} className='login-btn-wrapper'><Button size = 'medium' label="Log Out" /></div>
                    </div>
                :<div className='signup-login'>
                    <p className='signup'><Link to="/register">Sign Up</Link></p>
                    <div className='login-btn-wrapper'><Link to="/login"><Button size = 'medium' label="Log In" /></Link></div>
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