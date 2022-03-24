import React, { useState } from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'
import '../../Auth/Auth.css'

export default function SignUp() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [fistname, setFistname] = useState();
    const [middlename, setMiddlename] = useState();
    const [lastname, setLastname] = useState();
    const [isSignIn, setIsSignIn] = useState(false);

    const handleSignUp = () => {
        axios
            .post('/api/v1/auth/signup', {
                email: email,
                firstName: fistname,
                lastName: lastname,
                middleName: middlename,
                password: password
            })
            .then(
                (response) => {
                    console.log(response)
                    if(response.status == 200){
                        setIsSignIn(true)
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
        switch (e.target.name) {
            case 'password':
                setPassword(e.target.value)
                break;
            case 'email':
                setEmail(e.target.value)
                break;
            case 'firstName':
                setFistname(e.target.value)
                break;
            case 'middleName':
                setMiddlename(e.target.value)
                break;
            case 'lastName':
                setLastname(e.target.value)
                break;
            default:
                break;
        }
    }

    return (
      <div className='container'>
          <div className='form-container'>
                <h2 className='form-header'>Регистрация</h2>
                <input className='form-input' name='email' type="email" placeholder='Email' required onChange={handleChange}/>
                <input className='form-input' name='firstName' type="text" placeholder='Имя' required onChange={handleChange}/>
                <input className='form-input' name='lastName' type="text" placeholder='Фамилия' required onChange={handleChange}/>
                <input className='form-input' name='middleName' type="text" placeholder='Отчество' required onChange={handleChange}/>
                <input className='form-input' name='password' type="password" placeholder='Пароль' required onChange={handleChange}/>
                <button
                    className='button'
                    onClick={handleSignUp}
                >
                    Продолжить
                </button>
                <Link to='/'>Уже есть аккаунт</Link>
          </div>
      </div>
    )
}
