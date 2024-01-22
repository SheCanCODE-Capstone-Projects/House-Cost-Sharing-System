import React from 'react'
import './login.css'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
    const container =document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
    });
  return (
    <section className='login'>
        <div className='container1' id='container'>
        <div className='form-container1 sign-up'>
            <form>
                <h1>Create Account</h1>
                <div className='social-icons'>
                    <FcGoogle className='up'></FcGoogle>
                    <FaFacebook className='up'></FaFacebook>
                </div>
                <span> or use your email for registration</span>
                <input className='input1' type='text' placeholder='First Name' />
                <input className='input1' type='text' placeholder='Last Name' />
                <input className='input1' type='email' placeholder='Email' />
                <input className='input1' type='password' placeholder='Password' />
                <button>Sign Up</button>
            </form>
        </div>
        <div className='form-container1 sign-in'>
                <form>
                    <h1>Log In</h1>
                    <div className='social-icons'>
                        <FcGoogle className='in'></FcGoogle>
                        <FaFacebook className='in'></FaFacebook>
                    </div>
                    <span> or use your account</span>
                    <input className='input1' type='email' placeholder='Email' />
                    <input className='input1' type='password' placeholder='Password' />
                    <a href='#'>Forgot your password?</a>
                    <button>Log In</button>
                </form>
        </div>
        <div className='toggle-container'>
            <div className='toggle'>
                <div className='toggle-panel toggle-left'>
                    <h1>Welcome Back!</h1>
                    <p>Enter Your Personal Details To continue.</p>
                    <button className='hidden' id='login'>Login</button>
                </div>

                <div className='toggle-panel toggle-right'>
                    <h1>Hello!</h1>
                    <p>Register with Your Personal Details To continue.</p>
                    <button className='hidden' id='register'>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Login
