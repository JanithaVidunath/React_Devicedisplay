/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
/*import React, {useState} from 'react';
//import React from 'react';
//import Hello from './index.js';
function cinitial(){
  console.log("run fuction")
  return 0
}
function App(){
  const [count,setCount]=useState(cinitial)
  const[theme,setTheme]= useState('Number')
  function decre(){
    setCount(pre=>pre-1)
    setTheme('Previos number')
  }
  function incre(){
    setCount(pre=>pre+1)
    setTheme('Next number')
  }
  return(
    <>
      <button onClick={decre}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incre}>+</button>
    </>
  )
}*/
/*function App(){
  return(
    <div>
      <h1>This is the app Component </h1>
        <Hello/>
    </div>
  )
}*/
//export default App;

// new project
/*<Tweet name="ENTC" no="No of Students : 116" rank="rank=1"/>
        <Tweet name="CSE" no ="No of Students : 120" rank="rank=2"/>
        <Tweet name="EE" no="No of Students : 80" rank="rank=4"/>
        <Tweet name="CHE" no="No of Students : 100" rank="rank=3"/>*/

/*import React from 'react';
import { ReactDOM } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Display from './deviceDetail';
import AppBarDevice from './AppBar';
import Display2 from "./device";


function App(){
  return(
    <div>
       <BrowserRouter>
        <Routes>
          
          <Route path="/" element={AppBarDevice}>
            < Route index element={Display2}/>
            < Route path='bb' element={Display}/>


          </Route>
        </Routes>
      </BrowserRouter>

    </div>
   
  )
}
export default App;*/


/*import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import { yellow } from '@material-ui/core/colors';
import { IconButton, Switch } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ReactDOM } from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import Display2 from './device';
import Display from './deviceDetail';
import AppBarDevice from './AppBar';*/


              

/*function App(){ 
  
    return (
      <div>
        <AppBarDevice/>
      </div>
    )
}

export default App;*/
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import { yellow } from '@material-ui/core/colors';
import { IconButton} from '@material-ui/core';
import { Switch } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import {BrowserRouter,Route} from "react-router-dom";
import Display2 from './device';
import Display from './deviceDetail';
import "./App.css";
import Display3 from './load';




/*function App(){ 
  const routes= ["/bb","/aa"] ;
    return (
        <div>
          <BrowserRouter>
            <Route path="/" render={(history)=>(
              <AppBar position="static">
                
                <Tabs value={history.location.pathname !== '/'? history.location.pathname: false } > 
                
                  <Tab   label="DEVICE TABLES" value={routes[0]} component={Link} to={routes[0]}  />
                  <Tab   label="DEVICE DETAILS" value={routes[1]} component={Link} to={routes[1]}  />
                </Tabs>
              </AppBar>
            )}/>
              
            
            <Switch>
              < Route exact path={ '/bb'} >
                <Display/>
              </Route>
              < Route exact path={"/aa"}  >
                <Display2/>
              </Route>
            </Switch>
          </BrowserRouter>    
        </div>
    );
}*/

function App(){
  return(
    <div>
      <Display2/>
    </div>

  )
}

export default App;


