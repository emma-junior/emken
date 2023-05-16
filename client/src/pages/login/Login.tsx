import React from 'react'
import "./login.scss"
import Button from '../../components/button/Button'

const Login = () => {
  return (
    <main className='login'>
        <div className='login_wrapper'>
            <figure className='login_wrapper_image'><img src='/assets/images/doc-illustration.png' alt='treatment' /></figure>
            <div className='formwrapper'>
                <div className='formwrapper_top'>
                    <p className='formwrapper_top_p'>New to EMKEN?</p>
                    <Button size = 'large' label="Sign Up" />
                </div>
                <section className='formwrapper_wrapper'>
                    <form className='formwrapper_wrapper_form'>
                        <h2>Welcome Back to EMKEN!</h2>
                        <p className='formwrapper_wrapper_form_p'>Welcome to your medical platform. Please sign in back to get full access to services</p>
                        <div className='formwrapper_wrapper_form_input'>
                            <label>Email</label>
                            <input 
                                type="email" 
                                // placeholder="username"
                            />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </main>
  )
}

export default Login