class ScoreKeep {
    myStats;

    constructor(){
        this.myStats = { games: 5, wins: 3, losses: 2, guns: 6, rock: 2, paper: 3, scissors: 4 }
    }
    
    display(){
        document.getElementById("games").textContent = this.myStats.games;
        document.getElementById("wins").textContent = this.myStats.wins;
        document.getElementById("losses").textContent = this.myStats.losses;
        document.getElementById("gun").textContent = this.myStats.guns;

        const items = new Map([
            [this.myStats.guns, "Gun"],
            [this.myStats.rock, "Rock"],
            [this.myStats.paper, "Paper"],
            [this.myStats.scissors, "Scissors"]
        ]);
        const favorite = items.get(Math.max(...items.keys()))
        document.getElementById("fav").textContent = favorite;
    }
}

const scoring = new ScoreKeep()
scoring.display()