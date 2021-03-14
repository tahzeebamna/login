import React from 'react';
import './MenuStyle.css';
import Login from './Login';
import { useHistory } from 'react-router-dom';



function Register({inputText , setInputText,setRecord, record}) {
    const history = useHistory();
    
    
    const InputEvent2 = (event) =>{
        const{name, value} = event.target
        setInputText((oldVAl)=>{
            return{
                ...oldVAl,
                [name]:value
            }
        })
        // we are going to store previous value in this state
        // by using spread operator
        // we have alternative way for storing the previous value
        // setInputText({...inputText , [name]:value})
    }

        
    const SubmitEvent = (e) =>{
        e.preventDefault();
        const NewRecords ={...inputText, id:new Date().getTime().toString}
        console.log(record);
        setRecord([...record, NewRecords])
        setInputText({userName:" ", userEmail:" ",pswrd:" ",number:" "});
        

    }



    return (
        <div className="styleMenu">
                <h1>Please Register first!!!! {inputText.userName}</h1>
            <form action="submit">
               <div className="username">
                   UserName<input
                   autoComplete="off"
                   value={inputText.userName}
                   name="userName"
                    type="text" 
                    placeholder="Enter your name"
                    onChange={InputEvent2}
                    />
               </div>
               <div className="username">
                   userEmail<input 
                   name="userEmail"
                   value={inputText.userEmail}

                   autoComplete="off"

                   onChange={InputEvent2}
                   type="text" 
                   placeholder="Enter your email"/>
               </div>
               
                <div className="password">
                    password <input 
                    onChange={InputEvent2}
                    autoComplete="off"
                    value={inputText.pswrd}
                        name="pswrd"
                        type="password" placeholder ="plz enter your password"/> 
                </div>     
                <div className="contactn">
                    Contect No.<input 
                    onChange={InputEvent2}
                    value={inputText.number}
                   autoComplete="off"
                    type="number" name="number" id="number"/> 
                </div>
                    <br/>
                
                <button type="submit" onClick={SubmitEvent , history.push("./login")}
                 >SignUp</button>
            </form>
            
            <div className="showRecord">
                
         
              {
                  
                record.map((currVal) =>{
                    const {id, userName,userEmail,pswrd,number} = currVal
                    return(
                        <div className="registerData" key={id}>
                            <Login userName={userName}
                                 userEmail = {userEmail}
                                 pswrd = {pswrd}
                                 number ={number}
                                 />                      
                        </div>
                    )
              })}
            
            </div>
        </div>
    )
}

export default Register
