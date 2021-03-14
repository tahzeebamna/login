import React , { useState} from 'react';
import { Link } from 'react-router-dom';
import './MenuStyle.css';


const SignUp =()=>{

const [getInput, setGetInput] = useState({
  email:"",
  pswrd:"",
})  

const InputEvent = (event) =>{
const {   name , value } = event.target;
setGetInput((preval)=>{
            return{
              ...preval,
              [name]:value
            }
          })

        }
       
    return ( 
        
    <div className="styleMenu">
         <h1>Please SignUp here!!!  {getInput.email}  psword    here {getInput.pswrd}</h1>

         <br/><br/>
        <form action="submit">
          <div className="username">
             UserEmail<input type="txt"
             name="email"
              onChange={InputEvent} 
              value={getInput.email} 
              placeholder="Enter your email"/>
          </div>
          <div className="password">
             password <input type="password"
             name="pswrd"
              onChange={InputEvent}  
              value={getInput.pswrd}
               placeholder ="plz enter your password"/>

          </div>        
           <Link to="Register">  <button  > SignUp</button></Link>
        </form>
    
    </div>
     )
  }
  export default SignUp;