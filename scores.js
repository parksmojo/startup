class ScoreKeep {
    myStats;

    constructor(){
        this.myStats = this.loadStats();
        this.display();
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
        if(this.myStats.games === 0){
            return "None";
        }

        const items = new Map([
            [this.myStats.guns, "Gun"],
            [this.myStats.rock, "Rock"],
            [this.myStats.paper, "Paper"],
            [this.myStats.scissors, "Scissors"]
        ]);
        return items.get(Math.max(...items.keys()))
    }

    saveStats(stats = this.myStats){
        localStorage.setItem("userStats", JSON.stringify(stats));
    }

    loadStats(){
        const statsText = localStorage.getItem('userStats');
        if (statsText) {
            return JSON.parse(statsText);
        } else {
            const defaultStats = { games: 0, wins: 0, losses: 0, guns: 0, rock: 0, paper: 0, scissors: 0 };
            this.saveStats(defaultStats)
            return defaultStats;
        }
    }

}

const scoring = new ScoreKeep();