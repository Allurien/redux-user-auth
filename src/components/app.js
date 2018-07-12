import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Route} from 'react-router-dom';
import Nav from './nav/';
import Home from './home';
import About from './about';
import auth from '../hoc/auth';
import SecretList from './secretList';
import MovieQuotes from './movieQuotes';



const App = () => (
    <div>
        <Nav />
        <div className="container">
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/secret-list' component={auth(SecretList)}/>
            <Route path='/movie-quotes' component={auth(MovieQuotes)}/>
        </div>
    </div>
);

export default App;
