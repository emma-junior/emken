import React,{useState, FormEvent, useContext} from 'react'
import "./login.scss"
import Button from '../../components/button/Button'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {FaFacebookSquare} from "react-icons/fa"
import {app, database} from '../../firebaseConfig'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from 'react-router'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
    const auth = getAuth(app)
    const [data, setData] = useState<any>({
        email: '',
        password: ''
    })
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleInput = (event:any) => {
        let newInput = { [event.target.name]: event.target.value};

        setData({...data, ...newInput})
    }
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
            const user = response.user
            dispatch({type:"LOGIN", payload:user})
            navigate("/")
        })
        .catch((err) => {
            alert(err.message)
        })
    }   

    const [visible, setVisible] = useState<boolean>(false)
    const [input, setInput] = useState<string>("password")

    const togglePassword = () => {
        setVisible(!visible)
        setInput(visible ? "password" : "text")
    }
  return (
    <main className='login'>
        <div className='login_top'>
            <p className='login_top_p'>New to EMKEN?</p>
            <Button size = 'large' label="Sign Up" />
        </div>
        <div className='login_wrapper'>
            <figure className='login_wrapper_image'><img src='/assets/images/doc-illustration.png' alt='treatment' /></figure>
            <div className='formwrapper'>
                <section className='formwrapper_wrapper'>
                    <form className='formwrapper_wrapper_form'>
                        <h2>Welcome Back to EMKEN!</h2>
                        <p className='formwrapper_wrapper_form_p'>Welcome to your medical platform. Please sign in back to get full access to services</p>
                        <div className='formwrapper_wrapper_form_input'>
                            <label>Email</label>
                            <input name='email' placeholder='email' type='email' onChange={(event) => handleInput(event)} />
                        </div>
                        <div className='formwrapper_wrapper_form_input password'>
                            <label>Password</label>
                            <input name='password' placeholder='password' type={input} onChange={(event) => handleInput(event)} />
                            {visible ? <p onClick={togglePassword} className='shown-password'><AiOutlineEye /></p>: <p onClick={togglePassword} className='shown-password'><AiOutlineEyeInvisible /></p>}
                        </div>
                        <p className='formwrapper_wrapper_form_forgot'>Forgot password?</p>
                        <button onClick={handleSubmit} className='formwrapper_wrapper_form_btn'>Sign In Now</button>
                        <div className='formwrapper_wrapper_form_alternative'>
                            <p className='formwrapper_wrapper_form_alternative_p'>Or Continue With</p>
                            <div className='formwrapper_wrapper_form_alternative_signin'>
                                <div className='formwrapper_wrapper_form_alternative_signin_google'>
                                    <FcGoogle className='icon'/> <p>Google</p>
                                </div>
                                <div className='formwrapper_wrapper_form_alternative_signin_facebook'>
                                    <FaFacebookSquare className='icon'/> <p>Facebook</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </main>
  )
}

export default Login
