class Game {
    userScore;
    cpuScore;
    roundNum;

    constructor(){
        this.userScore = 0;
        this.cpuScore = 0;
        this.roundNum = 0;
        this.cpu();
    }

    resetRound(winner){
        console.log(winner, "Won!");
        if(winner === 'user'){
            this.userScore = this.userScore + 1;
        } else if(winner === 'cpu'){
            this.cpuScore = this.cpuScore + 1;
        }
        this.roundNum = this.roundNum + 1;
        this.updateDisplay()
        this.cpu();
    }

    updateDisplay(){
        document.getElementById("roundNum").innerText = this.roundNum;
        document.getElementById("userScore").innerText = this.userScore;
        document.getElementById("opScore").innerText = this.cpuScore;
    }

    startRound(userPick){
        const cpuPick = parseInt(localStorage.getItem('cpuPick'));
        let winner = 'none';

        if(userPick === cpuPick){ winner = 'tie'; }
        switch(userPick){
            case 0:
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