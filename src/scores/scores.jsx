import React from 'react';
import { display } from "./scores.js";

export function Scores() {
  return (
    <main className='light'>
      <div className="long popup">
                <div className="first">
                    <h1 className="centered">Your stats:</h1>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Games Played:</td>
                                <td id="games"></td>
                            </tr>
                            <tr>
                                <td>Wins:</td>
                                <td id="wins"></td>
                            </tr>
                            <tr>
                                <td>Losses:</td>
                                <td id="losses"></td>
                            </tr>
                            <tr>
                                <td>Times played Gun:</td>
                                <td id="gun"></td>
                            </tr>
                            <tr>
                                <td>Favorite option:</td>
                                <td id="fav">Paper</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1 className="centered">Global Scoreboard:</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Wins</th>
                            </tr>
                            
                        </thead>
                        <tbody id="scores">
                        </tbody>
                    </table>
                </div>
            </div>
            <DisplayScores  />
    </main>
  );
}

function DisplayScores() {
  React.useEffect(() => {
    display();
    console.log('rendered');
  });
}