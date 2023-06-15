import React, {useState} from 'react'
import {app} from '../../firebaseConfig'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import "../../styles/auth.scss"
import Input from '../../components/input/Input'
import Logo from '../../components/logo/Logo'

const Register = () => {
    const auth = getAuth(app)
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newInput = { [event.target.name]: event.target.value};

        setData({...data, ...newInput})
    }
    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
            console.log(response.user)
        })
        .catch((err) => {
            alert(err.message)
        })
    }   
  return (
    <section className='auth register'>
        <div className='auth_form'>
            <div><Logo /></div>
            <div className='auth_form_input'><Input name="email" handleInput={handleInput}  /></div>
            <div className='auth_form_input'><Input name='password' handleInput={handleInput}/></div>
            <br />
            <button className='auth_form_loginbtn' onClick={handleSubmit}>SIGN UP</button>
            <button className='auth_form_login-google'>SIGN UP WITH GOOGLE</button>
        </div>
        <figure className='auth_image'>
            <img src='/assets/images/reg-image.jpg' alt='auth' />
            <h1 className='quote'>When medical emergencies strike, bravery and compassion become our guiding lights.</h1>
            <div className='overlay'></div>
        </figure>      
    </section>
  )
}

export default Register