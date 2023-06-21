import React, {useState} from 'react'
import {app} from '../../firebaseConfig'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { getFirestore, doc, serverTimestamp, setDoc, } from "firebase/firestore";
import "../../styles/auth.scss"
import Input from '../../components/input/Input'
import { useNavigate } from 'react-router'
import Logo from '../../components/logo/Logo'

const Register = () => {
    const auth = getAuth(app)
    const navigate = useNavigate()
    const db = getFirestore(app);
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        displayName: '',
        email: '',
        password: ''
    })
    
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newInput = { [event.target.name]: event.target.value};

        setData({...data, ...newInput})
    }
    const handleSubmit = async(e:any) => {
        e.preventDefault();
        setLoading(true)
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            await setDoc(doc(db, "users", res.user.uid), {
                ...data,
                uid: res.user.uid,
                timeStamp: serverTimestamp(),
            });
            // await setDoc(doc(db, "userChats", res.user.uid), {});
            setLoading(false)
            navigate("/login")
        }
        // createUserWithEmailAndPassword(auth, data.email, data.password)
        // .then((response) => {
        //     console.log(response.user)
        // })
        catch (err:any) {
            setLoading(false)
            alert(err.message)
        }
    }   
  return (
    <section className='auth register'>
        <div className='auth_form'>
            <div><Logo /></div>
            <div className='auth_form_input'><Input name="displayName" type='text' handleInput={handleInput}  /></div>
            <div className='auth_form_input'><Input name="email" type="email" handleInput={handleInput}  /></div>
            <div className='auth_form_input'><Input name='password' type='password' handleInput={handleInput}/></div>
            <br />
            <button className='auth_form_loginbtn' onClick={handleSubmit}>{loading ? "LOADING...":"SIGN UP"}</button>
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