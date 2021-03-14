import React from 'react';
import './MenuStyle.css';
import { Link } from 'react-router-dom';



function Register() {
    return (
        <div className="styleMenu">
                <h1>Please Register first!!!!</h1>
            <form action="submit">
               <div className="username">
                   UserName<input type="text" placeholder="Enter your name"/>
               </div>
               <div className="username">
                   userEmail<input type="text" placeholder="Enter your email"/>
               </div>
               
                <div className="password">
                    password <input type="password" placeholder ="plz enter your password"/> 
                </div>     
                <div className="contactn">
                    Contect No.<input type="number" name="number" id="number"/> 
                </div>
                    <br/>
                
                <Link to="/"> <button type="submit">SignUp</button></Link>
            </form>
        </div>
    )
}

export default Register
