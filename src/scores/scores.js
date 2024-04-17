async function loadScores() {
    console.log("Loading Scores");
    let allscores = loadStatMap();
    try {
        const response = await fetch('/api/scores');
        let serverScores = await response.json();
        if(serverScores){
            // console.log("found server stats");
            allscores = new Map(Object.entries(serverScores));
            localStorage.setItem('localStatMap', JSON.stringify(allscores));
        }
    } catch(err) {
        console.log("couldn't get server stats:",err)
    }

    return allscores;
}

export async function updateStats(wins,losses,guns,rock,paper,scissors){
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
    await setStat(currentUser,stat);
}

async function getStat(currentUser = "User"){
    // console.log("getting stats for", currentUser);
    const statMap = await loadScores();
    if(statMap.has(currentUser)){
        // console.log(currentUser, "has stats");
        return statMap.get(currentUser);
    } else {
        // console.log(currentUser, "is a new user");
        const defaultStats = { games: 0, wins: 0, losses: 0, guns: 0, rock: 0, paper: 0, scissors: 0 };
        await setStat(currentUser,defaultStats);
        return defaultStats;
    }
}

async function setStat(currentUser = "User", currentUserStats){
    // console.log("setting stats for", currentUser);
    const statMap = await loadScores();
    statMap.set(currentUser,currentUserStats);
    const sortedMap = new Map([...statMap.entries()].sort((a, b) => b[1].wins - a[1].wins));
    localStorage.setItem('localStatMap',JSON.stringify(Object.fromEntries(sortedMap)));
    try {
        // console.log("trying to set stat:",sortedMap);
        const response = await fetch('/api/score', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(Object.fromEntries(sortedMap)),
        });

        const resMap = await response.json();
        console.log(resMap);
        // localStorage.setItem('localStatMap', JSON.stringify(Object.fromEntries(sortedMap)));
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
            console.log("found map");
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

export async function display(){
    const user = localStorage.getItem('currentUser') ?? 'User';
    // console.log(allscores);
    let allscores = await loadScores();
    allscores.delete('_id');
    const stats = await getStat(user);

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

// validate();
if(document.querySelector('#scores')){
    display();
}