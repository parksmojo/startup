import React from 'react';
import { Link } from 'react-router-dom';
import { loginFunc } from "./loginFuncs";
import { useNavigate } from 'react-router-dom';
import { insertUsername } from '../login/loginFuncs';

export function Login() {
  const navigate = useNavigate();

  async function clicking(){
    if(await loginFunc()){
      console.log("worked");
      insertUsername();
      navigate("/home");
    } else {
      console.log("didnt work");
    }
  }

  return (
    <main className='light'>
      <div className="popup">
        <h1>Login to play</h1>
        <input type="text" id="name" placeholder="Username" />
        <input type="text" id="password" placeholder="Password" />
        <button className="buttons" type="submit" onClick={() => clicking()}>Login</button>
        <p id="desc"></p>
        <div id="quote"></div>
      </div>
    </main>
  );
}