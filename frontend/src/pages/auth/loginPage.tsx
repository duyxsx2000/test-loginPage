import React, { useState, useEffect } from 'react';
import { actionPostLogin } from '../../services/auth/authAction';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";
import { LoginData } from '../../types/typeUser';
import { useAppDispatch, useAppSelector } from '../../App/hook';
import '../../styles/auth.css'
import { Link } from 'react-router-dom';
import { setStatus } from './authSlice';
function LoginPage() {
    const statusLogin = useAppSelector((state) => state.auth.status)
    const [validation, setValidation] = useState(false);
    const [displayPassword, setDisplayPassword] = useState<boolean>(false)
    const [userLogin, setUserLogin] = useState<LoginData>({
        account: '',
        password: '',
    });

    const dispatch = useAppDispatch();


    useEffect(() => {
        setValidation(validate());
    }, [userLogin]);

    const handleChange = (e: any) => {

        if(statusLogin === 'error') {
            dispatch(setStatus('none'))
        };

        const { name, value } = e.target;
        setUserLogin({
        ...userLogin,
        [name]: value,
        });
    };

    const validate = () => {
        const isAccountValid = typeof userLogin.account === 'string' && userLogin.account.trim() !== '';
        const isPasswordValid = typeof userLogin.password === 'string' && userLogin.password.trim() !== '';
        return isAccountValid && isPasswordValid;
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (validation) {
        const actionLogin = actionPostLogin(userLogin)
        dispatch(actionLogin)
        } else {
        }
    };

  return (
    <div className='Login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
            <h1>LOGIN</h1>
            <div className={`login-input ${statusLogin === 'error' && 'error-Input'}`}>
                <label htmlFor="account">Account:</label>
                <input
                    type="text"
                    id="account"
                    name="account"
                    value={userLogin.account}  
                    onChange={handleChange}
                />
            </div>
            <div className='login-input'>
                <label htmlFor="password">Password:</label>
                <div className={`login-input-password ${statusLogin === 'error' && 'error-Input'}`}>
                    <input
                        type={!displayPassword ? 'password' : 'text'}
                        id="password"
                        name="password"
                        value={userLogin.password}
                        onChange={handleChange}
                    />
                    <span onClick={() => !displayPassword ? setDisplayPassword(true) : setDisplayPassword(false)}>
                        {!displayPassword ? <FaEyeSlash/> : <FaEye/>}
                    </span>
                </div>
            </div>
            <Link to={'/#'}>
                <p style={{fontSize:"12px", color:'black', textAlign:"end"}}>For get password</p>
            </Link>

            <button 
                type="submit" 
                className={`${validation ? 'submit-validation' : 'submit-unValidation'}`} 
                disabled={!validation}
            >
                Login
            </button>
            <div className='another-login'>
                <button onClick={()=> {alert('update late')}}>
                    <FaGoogle/>
                </button>
                <button onClick={()=> {alert('update late')}}>
                    <FaFacebook/>
                </button>
            </div>
                {!validation && <p>Please enter valid account and password.</p>}
            
            </form>

    </div>
  );
}

export default LoginPage;
