import React from 'react';
import { Link } from 'react-router-dom';
import game_description from '/game_description.png';

export function Home() {
  return (
    <main className='light'>
      <div className="popup centered">
        <h1>Welcome</h1>
        <p>
            Have you ever played Rock Paper Scissors? Have you ever wished it was even cooler? 
            Now you can play the classic game with an added twist, a gun! The gun is beaten 
            by the rock, but beats both paper and scissors. Play against a cpu and see how you stack up against others!
        </p>
        <img src={game_description} alt='Game Image' width={300}/>
        <div>
          <Link to="/play"><button className="buttons big-buttons">Play!</button></Link>
        </div>
      </div>
    </main>
  );
}