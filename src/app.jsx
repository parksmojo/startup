import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { Home } from './home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <BrowserRouter>
            <div className='body'>
                <header className="dark">
                    <h1 className="full-title">Rock, Paper, Scissors ... Gun</h1>
                    <h1 className="small-title">RPSG</h1>
                    <nav>
                        <menu>
                            <li><NavLink className='nav-link' to='home'>Home</NavLink></li>
                            <li><NavLink className='nav-link' to='play'>Play</NavLink></li>
                            <li><NavLink className='nav-link' to='scores'>Scoreboard</NavLink></li>
                        </menu>
                    </nav>
                    <div>Logged in as: <NavLink className='nav-link' id="user" to='login'>User</NavLink></div>
                    <script>insertUsername()</script>
                </header>

                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/play' element={<Play />} />
                    <Route path='/scores' element={<Scores />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className="dark">
                    <span>Parker Shumard</span>
                    <a href="https://github.com/parksmojo/startup">Github</a>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className='light'>404: Return to sender. Address unknown.</main>;
  }