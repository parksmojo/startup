import React from 'react';
import { Link } from 'react-router-dom';
import { loginFunc } from "./loginFuncs";

export function Login() {
  return (
    <main className='light'>
      <div className="popup">
        <h1>Login to play</h1>
        <input type="text" id="name" placeholder="Username" />
        <input type="text" id="password" placeholder="Password" />
        <Link to="/home"><button className="buttons" type="submit" onClick={() => loginFunc()}>Login</button></Link>
        <p id="desc"></p>
        <div id="quote"></div>
      </div>
    </main>
  );
}