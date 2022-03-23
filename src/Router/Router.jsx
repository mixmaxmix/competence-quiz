import React, { useEffect, useRef } from 'react'
import Header from '../components/Header/Header'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthIn from '../Pages/AuthIn/AuthIn';
import Home from '../Pages/Home/Home';
import AuthUp from '../Pages/AuthUp/AuthUp';

export default function Router() {

  const isLogged = localStorage.getItem('isSignIn')

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
       isInitialMount.current = false;
    } else {
        isLogged = localStorage.getItem('isSignIn')
    }
  });

  return (
    <div>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route 
              path='/'
              element={
                isLogged ? <Home/> : <Navigate to='/signin'/>
              }
            />
            <Route 
              path='/signIn'
              element={
                !isLogged ? <AuthIn/> : <Navigate to='/'/>
              }
            />
            <Route 
              path='/signUp'
              element={
                !isLogged ? <AuthUp/> : <Navigate to='/'/>
              }
            />

            {/* <Route path='/signin' render={() => }></Route> */}
            {/* <Route path='/signin' element={ isLogged ? <Navigate to='/'/> : <AuthIn/> }>
            </Route>
            <Route path='/signup' element={ isLogged ? <Navigate to='/'/> : <AuthUp/> }/>
              { isLogged ? <Navigate to='/'/> : <AuthUp/> }
            <Route path='/' element={ !isLogged ? <Navigate to='/signin'/> : <Home/> }/> */}
              
            {/* <Route path='/' element={<Home/>} /> */}
            {/* <Route path='/contact' element={<Contact/>} /> */}
          </Routes>
      </BrowserRouter>
    </div>
  )
}
