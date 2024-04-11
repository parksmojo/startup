import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className='body'>
            <header class="dark">
                <h1 class="full-title">Rock, Paper, Scissors ... Gun</h1>
                <h1 class="small-title">RPSG</h1>
                <nav>
                    <menu>
                        <li><a class="active" href="home.html">Home</a></li>
                        <li><a href="play.html">Play</a></li>
                        <li><a href="scores.html">Scoreboard</a></li>
                    </menu>
                </nav>
                <div>Logged in as: <a id="user" onclick="logout()" href="index.html">User</a></div>
                <script>insertUsername()</script>
            </header>

            <main>App components go here</main>

            <footer class="dark">
                <span>Parker Shumard</span>
                <a href="https://github.com/parksmojo/startup">Github</a>
            </footer>
        </div>
    );
}