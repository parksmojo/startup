class ScoreKeep {
    constructor(){
        const currentUser = localStorage.getItem('currentUser') ?? 'User';
        this.display(currentUser);
    }

    updateStats(wins,losses,guns,rock,paper,scissors){
        console.log("updating stats!",wins,losses,guns,rock,paper,scissors);
        const currentUser = localStorage.getItem('currentUser') ?? 'User';
        let stat = this.getStat(currentUser);
        stat.games += wins + losses;
        stat.wins += wins;
        stat.losses += losses;
        stat.guns += guns;
        stat.rock += rock;
        stat.paper += paper;
        stat.scissors += scissors;
        this.setStat(currentUser,stat);
    }

    getStat(currentUser = "User"){
        console.log("getting stats for", currentUser);
        const statMap = this.loadStatMap();
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

    loadStatMap(){
        console.log("loading stat map");
        const statsText = localStorage.getItem('localStatMap');
        if(statsText){
            if(statsText.length > 2){
                console.log("found map")
                const statsMap = new Map(Object.entries(JSON.parse(statsText)));
                return statsMap;
            }
        } else {
            console.log("creating new map");
            const defaultStats = { games: 0, wins: 0, losses: 0, guns: 0, rock: 0, paper: 0, scissors: 0 };
            const newStatsMap = new Map([[this.currentUser, defaultStats]]);
            return newStatsMap;
        }
    }

    setStat(currentUser = "User", currentUserStats){
        console.log("setting stats for", currentUser);
        const statMap = this.loadStatMap();
        statMap.set(currentUser,currentUserStats);
        localStorage.setItem('localStatMap',JSON.stringify(Object.fromEntries(statMap)));
    }

    display(user){
        const stats = this.getStat(user);
        if(document.getElementById("games")){ document.getElementById("games").textContent = stats.games }
        if(document.getElementById("wins")){ document.getElementById("wins").textContent = stats.wins }
        if(document.getElementById("losses")){ document.getElementById("losses").textContent = stats.losses }
        if(document.getElementById("gun")){ document.getElementById("gun").textContent = stats.guns }

        const favorite = this.findFavorite(stats);
        if(document.getElementById("fav")){ document.getElementById("fav").textContent = favorite }
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

function loadScores() {
    const currentUser = localStorage.getItem('currentUser') ?? 'User';
    let stat = scoring.getStat(currentUser);
    insertScore(currentUser, stat.wins);
    if(document.querySelector('#scores')){
        let scores = [];
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
            scores = JSON.parse(scoresText);
        }

        const tableBodyEl = document.querySelector('#scores');

        if (scores.length) {
            for (const [i, score] of scores.entries()) {
            const positionTdEl = document.createElement('td');
            const nameTdEl = document.createElement('td');
            const scoreTdEl = document.createElement('td');

            positionTdEl.textContent = i + 1;
            nameTdEl.textContent = score.name;
            scoreTdEl.textContent = score.score;

            const rowEl = document.createElement('tr');
            rowEl.appendChild(positionTdEl);
            rowEl.appendChild(nameTdEl);
            rowEl.appendChild(scoreTdEl);

            tableBodyEl.appendChild(rowEl);
            }
        } else {
            tableBodyEl.innerHTML = '<tr><td colSpan=4>Scores Unavailable</td></tr>';
        }
    }
}

function insertScore(user, wins){
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
        scores = JSON.parse(scoresText);
    }
    let found = false;
    for(const obj of scores){
        if(obj.name === user){
            obj.score = wins;
            found = true;
            break;
        }
    }
    if(!found){ 
        console.log("Inserting a new score!");
        scores.push({ name: user, score: wins});
    }

    scores.sort((a, b) => b.score - a.score);
    localStorage.setItem('scores', JSON.stringify(scores));
}

function placeholderScores(){
    insertScore('H3nry', 40);
    insertScore('Sharon5', 32);
    insertScore('Zack007', 15);
    insertScore('Brad?', 7);
}

const scoring = new ScoreKeep();
placeholderScores();
loadScores();
