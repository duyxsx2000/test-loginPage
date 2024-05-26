import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import LoginPage from '../pages/auth/loginPage'
import { useAppSelector } from '../App/hook'
import HomePage from '../pages/home/homePage'

export const AppRoute = (
    
) => {

    const auth = useAppSelector(state => state.auth)
    return (
        <Routes>
            <Route 
                path='/' 
                element= {auth.user ? (
                    <HomePage/>
                ) : (
                    <Navigate to={'/login'} replace/>
                )}
            />
            <Route 
                path='/login' 
                element= {!auth.user ? (
                    <LoginPage/>
                ) : (
                    <Navigate to={'/home'} replace/>
                )}
            /> 
            <Route 
                path='/home' 
                element= {auth.user ? (
                    <HomePage/>
                ) : (
                    <Navigate to={'/login'} replace/>
                )}
            /> 
        </Routes>
    )
}


    
