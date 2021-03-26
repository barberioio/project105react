import React from 'react'

function Login() {
    return (
        <div className="loginpage">
        <div className="login">
            <div className="headlogin">
            <h1>Login</h1>
            </div>

            <div>
            <input className="username"placeholder="Username"/></div>

            <div>
            <input  type="password" className="password" placeholder="Password"/></div>
            <button className="loginbutton">login</button> 
        </div>
        </div>
    )
}

export default Login
