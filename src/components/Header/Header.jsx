import React, { useEffect, useState } from 'react'
import './Header.css'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'

export default function Header() {

    const isLogged = localStorage.getItem('isSignIn');
    const role = localStorage.getItem('role');
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if(role == 'ROLE_ADMIN') {
            setIsAdmin(true)
        }
    }, [])

    // useEffect(() => {
    //     axios.post('/api/v1/auth/signin', {
    //         password: 'qwerty123',
    //         username: 'mixmaxmixpro@yandex.ru'
    //     })
    //         .then(response => response.status)
    // })

    const logOutHandler = () => {
        localStorage.clear()
        setIsAdmin(false)
    }

    const adminHandler = () => {
        <Navigate to='/'/>
    }

    return (
      <header>
          <div className='header-nav'>
            <Link className='header-logo' to='/'><h2>ОБУЧЕНИЕ ПОЛИГРАФИИ</h2></Link>
              <div>
                  { isAdmin ? <button className='header-button right' onClick={adminHandler}>Создать тест</button> : ''}
                  { isLogged ? <button className='header-button' onClick={logOutHandler}>Выйти</button> : ''}
              </div>
          </div>
      </header>
    )
}
