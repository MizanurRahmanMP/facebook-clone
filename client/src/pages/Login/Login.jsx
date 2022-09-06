import React from 'react';
import './Login.scss';
import logo from '../../components/assets/img/facebook.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (

    <>
      <div className='login-container'>
        <div className="login-wrapper">
          <div className="facebook-login">
            <a href="#"><img src={ logo } alt="" /></a>
            <div className="facebook-content">
            <h3>Facebook helps you connect and share with the people in your life.</h3>
            </div>
          </div>
        
          <div className="right-colum">
            <div className="form-section">
              <form className="login-form">
                <input type="text" className='login-input' placeholder='Email address or phone number' />
                <input type="password" className="login-input" placeholder='Password' />
                <button className='login-button'>Log In</button>
              </form>
              <a className='forgate-password' href="#">Forgotten password?</a>
              <div className="diveder">
                  <hr />
              </div>
              <div className="create-new-account">
                <button><Link to="./register">Create New Account</Link></button>
              </div>
            </div>
              
            <div className="bottom-content">
              <span className='create-page-right'><a className='create-page-left' href="#">Create a Page</a> for a celebrity, brand or business.</span>
            </div>
          </div>
            
        </div>
        
    </div>
    
    </>
    
  )
};

export default Login;