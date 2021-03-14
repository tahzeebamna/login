import './App.css';
import {
  BrowserRouter,Route, Switch
  
} from "react-router-dom";
import SignUp from './SignUp';
import Register from './Register';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
            <Route path="/" exact component={SignUp}/>
            <Route path="/Register" exact component={Register}/>  
      </Switch>

      
    </div>
    </BrowserRouter>

  );
}

export default App;
