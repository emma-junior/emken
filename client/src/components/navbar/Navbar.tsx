import React,{useState, useEffect} from 'react'
import "./navbar.scss"

const Navbar = () => {
    const [color, setColor] = useState<boolean>(false);

    const changeColor = () => {
        if (window.scrollY >= 1) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    useEffect(() => {
		window.addEventListener("scroll", changeColor);
  }, [])
  return (
    <nav className={color ? 'navbar navbar-bg' : 'navbar'}>
        <div className='navbar-wrapper'>
            <h3>EMKEN</h3>
            <ul>
                <li>HOME</li>
                <li>MEDICAL EMERGENCY</li>
                <li>FIND HOSPITAL</li>
                <li>CHAT WITH DOCTOR</li>
            </ul>
            <div className='signup-login'>
                <p className='signup'>Sign Up</p>
                <div className='login'><button className='login-btn'>Log In</button></div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar