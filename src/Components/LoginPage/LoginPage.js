import React from 'react'
import './LoginPage.css';
import logo from '../Assets/SmartServLogo.JPG';
import { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
      
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
      
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
      
    const validateUsername = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(username);
    };
      
    const validatePassword = () => {
        const passwordRegex =/^(?=.*[A-Z])(?=.*\d)(?!.*[^@A-Za-z\d]).{8,}$/;
        return passwordRegex.test(password);
    };

      
    const handleLogin = () => {
        if (!validateUsername()) {
            alert('Please enter a valid email address');
        } else if (!validatePassword()) {
            alert('Password should contain an uppercase letter, a number, and only @ as a special character and passowrd sholud be more than 8 digit');
        } else {
            // Check if the entered password is the expected one
            if (password === 'SmartServTest@123') {
                alert('Correct Passowrd');
            } else {
                alert('Incorrect password. Please try again.');
            }
        }
    };

  return (
    <div className='mainContainer'>
        <div className='childContainer'>
            <div className='ImageContainer'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='mainContentUser'>
                <input type="email" name='Username' placeholder='Username' onChange={handleUsernameChange}></input>
            </div>
            <div className='mainContentPassword'>
                <input type="password" name='Password' placeholder='Password' onChange={handlePasswordChange}></input>
            </div>
            <div className='loginButton'>
                <button type="submit" name='Login' onClick={handleLogin} > LOGIN </button>
            </div>
            <div className='forgetPass'>
                <label name='Forget' > Forgot your Password? </label>
            </div>
        </div>
    </div>
  );
};

export default LoginPage
