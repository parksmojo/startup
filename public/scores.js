async function loadScores() {
    let allscores = [];
    try {
        const response = await fetch('/api/scores');
        allscores = await response.json();
    } catch(err) {
        console.log("couldn't get server stats:",err)
    }

    if(document.querySelector('#scores')){
        display(allscores);
    }

    console.log("Received from server: ",allscores);
    return allscores;
}

async function updateStats(wins,losses,guns,rock,paper,scissors){
    // console.log("updating stats!",wins,losses,guns,rock,paper,scissors);
    const currentUser = localStorage.getItem('currentUser') ?? 'User';
    let stat = await getStat(currentUser);
    stat.games += wins + losses;
    stat.wins += wins;
    stat.losses += losses;
    stat.guns += guns;
    stat.rock += rock;
    stat.paper += paper;
    stat.scissors += scissors;
    setStat(stat);
}

async function getStat(currentUser = "User"){
    console.log("getting stats for", currentUser);
    const stats = await loadScores();
    let userStats = null;
    for(let item of stats){
        if(item.name === currentUser){
            userStats = item;
        }
    }
    if(userStats === null){
        console.log(currentUser, "is a new user");
        const newStats = { name: currentUser, games: 0, wins: 0, losses: 0, guns: 0, rock: 0, paper: 0, scissors: 0 };
        setStat(newStats);
        return newStats;
    } else {
        console.log(currentUser, "has stats");
        return userStats;
    }
}

async function setStat(stats){
    try {
        const response = await fetch('/api/score', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(stats),
        });
    } catch(err){
        console.log("couldn't submit stats to server:",err)
    }
}

function loadStatMap(){
    // console.log("loading stat map");
    const currentUser = localStorage.getItem('currentUser') ?? 'User';
    const statsText = localStorage.getItem('localStatMap');
    if(statsText){
        if(statsText.length > 2){
            // console.log("found map");
            const statsMap = new Map(Object.entries(JSON.parse(statsText)));
            return statsMap;
        }
    } else {
        // console.log("creating new map");
        const defaultStats = { games: 0, wins: 0, losses: 0, guns: 0, rock: 0, paper: 0, scissors: 0 };
        const newStatsMap = new Map([[currentUser, defaultStats]]);
        localStorage.setItem('localStatMap',JSON.stringify(Object.fromEntries(newStatsMap)));
        return newStatsMap;
    }
}

function findFavorite(stats){
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

function display(allscores){
    const user = localStorage.getItem('currentUser') ?? 'User';
    // console.log(allscores);
    const stats = getStat(user);

    if(document.getElementById("games")){ document.getElementById("games").textContent = stats.games }
    if(document.getElementById("wins")){ document.getElementById("wins").textContent = stats.wins }
    if(document.getElementById("losses")){ document.getElementById("losses").textContent = stats.losses }
    if(document.getElementById("gun")){ document.getElementById("gun").textContent = stats.guns }
    const favorite = findFavorite(stats);
    if(document.getElementById("fav")){ document.getElementById("fav").textContent = favorite }
    const tableBodyEl = document.querySelector('#scores');

    let i = 1;
    allscores.forEach(function(stats,name) {
        const positionTdEl = document.createElement('td');
        const nameTdEl = document.createElement('td');
        const scoreTdEl = document.createElement('td');
        positionTdEl.textContent = i;
        nameTdEl.textContent = name;
        scoreTdEl.textContent = stats.wins;

        const rowEl = document.createElement('tr');
        rowEl.appendChild(positionTdEl);
        rowEl.appendChild(nameTdEl);
        rowEl.appendChild(scoreTdEl);

    tableBodyEl.appendChild(rowEl);
    i++;
    })
}

validate();
// loadScores();