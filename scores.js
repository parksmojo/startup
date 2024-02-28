class ScoreKeep {
    myStats;

    constructor(){
        this.myStats = { games: 5, wins: 3, losses: 2, guns: 6, rock: 2, paper: 3, scissors: 4 }
        this.display()
    }
    
    display(){
        document.getElementById("games").textContent = this.myStats.games;
        document.getElementById("wins").textContent = this.myStats.wins;
        document.getElementById("losses").textContent = this.myStats.losses;
        document.getElementById("gun").textContent = this.myStats.guns;

        const favorite = this.findFavorite();
        document.getElementById("fav").textContent = favorite;
    }

    findFavorite(){
        const items = new Map([
            [this.myStats.guns, "Gun"],
            [this.myStats.rock, "Rock"],
            [this.myStats.paper, "Paper"],
            [this.myStats.scissors, "Scissors"]
        ]);
        return items.get(Math.max(...items.keys()))
    }
}

const scoring = new ScoreKeep()