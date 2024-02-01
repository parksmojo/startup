# Rock Paper Scissors Gun!
Click [here](/notes.md) to see my notes
## Description Deliverable:
### Elevator Pitch
Have you ever played Rock Paper Scissors? Have you ever wished it was even cooler? Now you can play the classic game with an added twist, a gun! The gun is beaten by the rock, but beats both paper and scissors. Play against a cpu or even your friends, and see how you stack up against others!

### Design
| ![The Menu](images/menu_sketch.png) | ![The Game](images/game_sketch.png) | ![Your Account](images/account_sketch.png) | ![The Scoreboard](images/scores_sketch.png) |
| - | - | - | - | 

### Key Features
- Easy account creation
- Keeps track of personal game stats
- Worldwide scoreboard displayed in real time
- Can play against website or other players
- Includes game explanation

### Technologies
- **HTML** - The 4 main webpages represented above will be written in HTML
- **CSS** - CSS will provide the styling and allow access on many types of devices
- **JavaScript** - The login, the game itself, and the storing of stats will be made with JavaScript
- **Authentication** - The user will create an account and login to play. User information will be securely stored in a backend database
- **Persistent data** - Used to store stats and scores, along with login information
- **Web sockets** - Stats and scores will update in real time

## HTML Deliverable:
For this deliverable I built my webpage structure in HTML.
- **Placeholder Application data:** - Buttons placed to play the game, alongside text readouts of each player's pick
- **Placeholder Database data:** - Scoreboard showing the user's stats and the world stats
- **WebSocket data:** - Sending and receiving the choices of each player in the game
- **3rd party service call:** - placeholder for a profanity check on the input username
- I reorganized the pages a bit from the Description Deliverable, combining the account and scoreboard pages, and adding a separate login page
- A self-designed diagram of the way the game works was added to help understanding the way the game plays
