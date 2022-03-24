import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, Redirect, Navigate } from 'react-router-dom'
import '../../Auth/Auth.css'

export default function SignIn() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isSignIn, setIsSignIn] = useState(localStorage.getItem('isSignIn') || false);

    const handleSignIn = () => {
        axios
            .post('/api/v1/auth/signin', {
                password: password,
                username: email
            })
            .then(
                (response) => {
                    if(response.status == 200){
                        localStorage.setItem('isSignIn', true)
                        localStorage.setItem('token', `Bearer ${response.data.result.token}`)
                        localStorage.setItem('role', `${response.data.result.role}`)
                        localStorage.setItem('email', `${response.data.result.email}`)
                        localStorage.setItem('firstName', `${response.data.result.firstName}`)
                        localStorage.setItem('lastName', `${response.data.result.lastName}`)
                        window.location.reload()
                    }
                }
            )
        }

    const handleChange = (e) => {
        switch (e.target.type) {
            case 'password':
                setPassword(e.target.value)
                break;
            case 'email':
                setEmail(e.target.value)
                break;
            default:
                break;
        }
    }


    return (
      <div className='container'>
          <div className='form-container'>
                <h2 className='form-header'>Войти</h2>
                <input className='form-input' type="email" placeholder='Email' required onChange={handleChange}/>
                <input className='form-input' type="password" placeholder='Пароль' required onChange={handleChange}/>
                <button
                    className='button'
                    onClick={handleSignIn}
                >
                    Войти
                </button>
                <Link to='/signUp'>Создать аккаунт</Link>
                {isSignIn == true ? <Navigate to='/'/> : ''}
          </div>
      </div>
    )
}
