import './App.css';
import {
  BrowserRouter,Route, Switch
  
} from "react-router-dom";
import Register from './Register';
import { useState } from 'react';
import Login from './Login';



function App() {
  const [inputText, setInputText] = useState(
    {
        userName:"",
        userEmail:"",
        pswrd:"",
        number:""

    }
)
const [record, setRecord] = useState([])
  


  return (

    <BrowserRouter>
      <div>
        <Switch>
            <Route > 
            <Register
               inputText={inputText}
               setInputText={setInputText}
               record={record}
               setRecord={setRecord}              
            /> 
            
            </Route>
            <Route exact path="/login"><Login/></Route>
      </Switch>

      
    </div>
    </BrowserRouter>

  );
}

export default App;
