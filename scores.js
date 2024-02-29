class ScoreKeep {
    constructor(){
        const currentUser = localStorage.getItem('currentUser') ?? 'User';
        const currentUserStats = this.getStat(currentUser);
        this.display(currentUserStats);
    }

    getStat(currentUser = "User"){
        console.log("getting stats for", currentUser);
        const statMap = this.loadStats();
        if(statMap.has(currentUser)){
            console.log(currentUser, "has stats");
            return statMap.get(currentUser);
        } else {
            console.log(currentUser, "is a new user");
            const defaultStats = { games: 0, wins: 0, losses: 0, guns: 0, rock: 0, paper: 0, scissors: 0 };
            statMap.set(currentUser,defaultStats);
            return defaultStats;
        }
    }

    loadStats(){
        console.log("loading stat map");
        const statsText = localStorage.getItem('localStatMap');
        if(statsText.length > 2){
            console.log("found map")
            const statsMap = new Map(Object.entries(JSON.parse(statsText)));
            return statsMap;
        } else {
            console.log("creating new map");
            const defaultStats = { games: 0, wins: 0, losses: 0, guns: 0, rock: 0, paper: 0, scissors: 0 };
            const newStatsMap = new Map([[this.currentUser, defaultStats]]);
            return newStatsMap;
        }
    }

    display(stats){
        document.getElementById("games").textContent = stats.games;
        document.getElementById("wins").textContent = stats.wins;
        document.getElementById("losses").textContent = stats.losses;
        document.getElementById("gun").textContent = stats.guns;

        const favorite = this.findFavorite(stats);
        document.getElementById("fav").textContent = favorite;
    }

    findFavorite(stats){
        if(stats.games === 0){
            return "None";
        }

        const items = new Map([
            [stats.guns, "Gun"],
            [stats.rock, "Rock"],
            [stats.paper, "Paper"],
            [stats.scissors, "Scissors"]
        ]);
        return items.get(Math.max(...items.keys()))
    }
}

const scoring = new ScoreKeep();