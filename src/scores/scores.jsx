import React from 'react';

export function Scores() {
  return (
    <main className='light'>
      <div class="long popup">
                <div class="first">
                    <h1 class="centered">Your stats:</h1>
                    <table class="table">
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
                    <h1 class="centered">Global Scoreboard:</h1>
                    <table class="table">
                        <thead>
                            <th>#</th>
                            <th>Name</th>
                            <th>Wins</th>
                        </thead>
                        <tbody id="scores">
                        </tbody>
                    </table>
                </div>
            </div>
    </main>
  );
}