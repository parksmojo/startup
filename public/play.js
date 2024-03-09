class Game {
    currentUser;
    userScore;
    cpuScore;
    roundNum;

    wins;
    losses;
    gun;
    rock;
    paper;
    scissors;

    constructor(){
        this.currentUser = localStorage.getItem('currentUser');
        this.userScore = 0;
        this.cpuScore = 0;
        this.roundNum = 0;

        this.resetStatCounters();
        this.cpu();
    }

    resetStatCounters(){
        this.wins = 0;
        this.losses = 0;
        this.gun = 0;
        this.rock = 0;
        this.paper = 0;
        this.scissors = 0;
    }

    resetMatch(winner){
        if(winner === 'user'){
            this.wins += 1;
            document.getElementById('status').innerText = this.currentUser + " won!";
        } else if(winner === 'cpu'){
            this.losses += 1;
            document.getElementById('status').innerText = "CPU won!";
        }
        this.userScore = 0;
        this.cpuScore = 0;
        this.roundNum = 1;
        scoring.updateStats(this.wins,this.losses,this.gun,this.rock,this.paper,this.scissors);
        this.resetStatCounters();
    }

    resetRound(winner){
        let statusMessage = "None";
        if(winner === 'user'){
            this.userScore = this.userScore + 1;
            statusMessage = this.currentUser + " got a point!";
        } else if(winner === 'cpu'){
            this.cpuScore = this.cpuScore + 1;
            statusMessage = "CPU got a point!";
        } else if(winner === 'tie'){
            statusMessage = "Tie!";
        }

        document.getElementById('status').innerText = statusMessage;
        this.roundNum = this.roundNum + 1;

        if(this.userScore > 1 || this.cpuScore > 1){ this.resetMatch(winner); }
        this.updateDisplay();
        this.cpu();
    }

    updateDisplay(){
        document.getElementById("roundNum").innerText = this.roundNum;
        document.getElementById("userScore").innerText = this.userScore;
        document.getElementById("opScore").innerText = this.cpuScore;
        const cpuPick = parseInt(localStorage.getItem('cpuPick'));
        const opHand = document.getElementById("opChoice");
        switch(cpuPick){
            case 0:
                opHand.src="./images/rockhand.jpg";
                break;
            case 1:
                opHand.src="./images/paperhand.jpg";
                break;
            case 2:
                opHand.src="./images/scissorshand.jpg";
                break;
            case 3:
                opHand.src="./images/pistolhand.jpg";
                break;
        }
    }

    startRound(userPick){
        const cpuPick = parseInt(localStorage.getItem('cpuPick'));
        let winner = 'none';

        if(userPick === cpuPick){ winner = 'tie'; }
        switch(userPick){
            case 0:
                this.rock += 1;
                switch(cpuPick){
                    case 1:
                        winner = 'cpu';
                        break;
                    case 2:
                    case 3:
                        winner = 'user';
                        break;
                }
                break;
            case 1:
                this.paper += 1;
                switch(cpuPick){
                    case 0:
                        winner = 'user';
                        break;
                    case 2:
                    case 3:
                        winner = 'cpu';
                        break;
                }
                break;
            case 2:
                this.scissors += 1;
                switch(cpuPick){
                    case 1:
                        winner = 'user';
                        break;
                    case 0:
                    case 3:
                        winner = 'cpu';
                        break;
                }
                break;
            case 3:
                this.gun += 1;
                switch(cpuPick){
                    case 0:
                        winner = 'cpu';
                        break;
                    case 1:
                    case 2:
                        winner = 'user';
                        break;
                }
                break;
        }
        this.resetRound(winner);
    }

    cpu(){
        const cpuPick = Math.floor(Math.random() * 4);
        localStorage.setItem('cpuPick',cpuPick);
    }
}

const game = new Game();