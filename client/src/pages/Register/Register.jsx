import React from 'react';

const Register = () => {
  return (
    <div className='login-container'>
        <div className="login-wrapper">
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
            </div>
              
            <div className="bottom-content">
              <span className='create-page-right'><a className='create-page-left' href="#">Create a Page</a> for a celebrity, brand or business.</span>
            </div>
          </div>
            
        </div>
        
    </div>
  )
};

export default Register;