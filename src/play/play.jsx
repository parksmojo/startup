import React from 'react';
import './play.css';
import rockhand from '/rockhand.jpg';
import paperhand from '/paperhand.jpg';
import pistolhand from '/pistolhand.jpg';
import scissorshand from '/scissorshand.jpg';
import blankhand from '/blankhand.jpg'

export function Play() {
  return (
    <main className='light'>
      <div className="popup centered">
          <h1>You vs CPU</h1>
          <h3>Round <span id="roundNum">1</span></h3>
          <h4 id="status">Waiting for choice...</h4>
          <div className="sides">
              <div className="left">
                  <h2>Your choice:</h2>
                  <div className="button-container">
                    <div><button><img id="rock" src={rockhand} width={70}/></button></div>
                    <div><button><img id="paper" src={paperhand} width={70}/></button></div>
                    <div><button><img id="scissor" src={scissorshand} width={70}/></button></div>
                    <div><button><img id="gun" src={pistolhand} width={70}/></button></div>
                      {/* <div><button><img id="rock" onclick="game.startRound(0)" src="./images/rockhand.jpg" style="width:70px;"/></button></div>
                      <div><button><img id="paper" onclick="game.startRound(1)" src="./images/paperhand.jpg" style="width:70px;"/></button></div>
                      <div><button><img id="scissor" onclick="game.startRound(2)" src="./images/scissorshand.jpg" style="width:70px;"/></button></div>
                      <div><button><img id="gun" onclick="game.startRound(3)" src="./images/pistolhand.jpg" style="width:70px;"/></button></div> */}
                  </div>
              </div>
              <div className="middle centered">
                  <h1>
                      <span id="userScore">0</span>:<span id="opScore">0</span>
                  </h1>
              </div>
              <div>
                  <h2>CPU{"\n"}chose:</h2>
                  <div><img id="opChoice" src={blankhand} width={70}/></div>
                  {/* <div><img id="opChoice" src="./images/blankhand.jpg" style="width:70px;"/></div> */}
              </div>
          </div>
      </div>
      
      <div className="popup players">
          <h3>Live Feed:</h3>
          <div id="player-messages"></div>
      </div>
    </main>
  );
}