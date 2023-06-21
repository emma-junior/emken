import React,{useState, FormEvent, useContext} from 'react'
import {app, database} from '../../firebaseConfig'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from 'react-router'
import { AuthContext } from '../../context/AuthContext'
import Logo from '../../components/logo/Logo'
import Input from '../../components/input/Input'
import "../../styles/auth.scss"

const Login = () => {
    const auth = getAuth(app)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        let newInput = { [event.target.name]: event.target.value};

        setData({...data, ...newInput})
    }
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        setLoading(true)
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
            // const user = response.user
            // dispatch({type:"LOGIN", payload:user})
            setLoading(false)
            navigate("/")
        })
        .catch((err) => {
            setLoading(false)
            alert(err.message)
        })
    }   

  return (
    <section className='auth login'>
        <figure className='auth_image'>
            <img src='/assets/images/login-image.jpg' alt='register' />
            <h1 className='quote'>Login to get full access to all our access.</h1>
            <div className='overlay'></div>
        </figure>
        <div className='auth_form'>
            <div><Logo /></div>
            <div className='auth_form_input'><Input name="email" type="email" handleInput={handleInput}  /></div>
            <div className='auth_form_input'><Input name='password' type="password" handleInput={handleInput}/></div>
            <br />
            <button className='auth_form_loginbtn' onClick={handleSubmit}>{loading ? "LOADING...":"SIGN IN"}</button>
            <button className='auth_form_login-google'>SIGN IN WITH GOOGLE</button>
            <br />
            <p className='auth_form_forgotten'>Forgotten your password?</p>
            <p className='auth_form_account'>Don't have an account? <span className='signup'>Sign up here!</span></p>
        </div>
    </section>
  )
}

export default Login
