import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState , setCurrentState] = useState("Login")

  return (
    <div className='login-popup' >
      <form className='login-popup-container'>
        <div className='login-popup-title'>
            <h2>{currentState}</h2>
            <img onClick={() =>setShowLogin(false)} src={assets.cross_icon} alt=""></img>
        </div>
        <div className='login-popup-inputs'>
          {currentState==="Login"?<></>:<input type='text' placeholder='Your Name' required></input>}
          <input type='email' placeholder='Your E-mail' required></input>
          <input type='password' placeholder='Password' required></input>
        </div> 
        <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
        <div className='login-popup-condition'>
          <input type="checkbox" required></input>
          <p>By continuing, i agree to the term of use & privacy policy.</p>
        </div>
        {currentState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
        : <p>Already have an account?<span onClick={()=>setCurrentState("Login")}>Login here</span></p>
        }
        
      </form>
    </div>
  )
}

export default LoginPopup
