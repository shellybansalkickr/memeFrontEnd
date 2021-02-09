import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//components
import {Routes} from './routes.js';
import { Navigator } from './components/NavBar';
import{Footer} from './components/footer1';



function App(){
    return(
            <div id='gradient-bg' className="App"> 
            <Navigator/>
            <Router>
                <Routes />
            </Router>
            
            <Footer/>
        </div>
 
    )
}

export default App;