import React, {useState, FormEvent} from 'react'
import {app, database} from '../../firebaseConfig'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import "./register.scss"
import Input from '../../components/input/Input'
import Logo from '../../components/logo/Logo'

const Register = () => {
    const auth = getAuth(app)
    const [data, setData] = useState<any>({
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
    <section className='register'>
        <div className='register_form'>
            <div><Logo /></div>
            <div className='register_form_input'><Input name="email" handleInput={handleInput}  /></div>
            <div className='register_form_input'><Input name='password' handleInput={handleInput}/></div>
            <br />
            <button className='register_form_loginbtn' onClick={handleSubmit}>SIGN UP</button>
            <button className='register_form_login-google'>SIGN UP WITH GOOGLE</button>
        </div>
        <figure className='register_image'>
            <img src='/assets/images/reg-image.jpg' alt='register' />
            <h1 className='quote'>When medical emergencies strike, bravery and compassion become our guiding lights.</h1>
            <div className='overlay'></div>
        </figure>      
    </section>
  )
}

export default Register