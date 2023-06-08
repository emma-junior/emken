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
    <div className='register'>
        <div className='register_form'>
            <div><Logo /></div>
            <Input name="email" handleInput={handleInput}  />
            <Input name='password' handleInput={handleInput}/>
            <br />
            <button className='register_form_loginbtn' onClick={handleSubmit}>REGISTER</button>
            <button className='register_form_login-google'>REGISTER WITH GOOGLE</button>
        </div>
        <figure className='register_image'>
                <img src='/assets/images/reg-image.jpg' alt='register' />
                <div className='overlay'></div>
        </figure>      
    </div>
  )
}

export default Register