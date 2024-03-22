function login() {
  // console.log("Logging in");
  const nameEl = document.querySelector("#name");
  const passwordEl = document.querySelector("#password");
  if(nameEl.value === "" || passwordEl.value === ""){
    document.getElementById("desc").innerHTML = "Invalid username or password";
    document.getElementById("desc").style.color = "red";
  } else {
    loginOrCreate(nameEl.value);
  }
}

async function loginOrCreate(username) {
  let endpoint = "";
  const theuser = await getUser(username);
  if(theuser === null){
    endpoint = `/api/auth/create`;
  } else {
    endpoint = `/api/auth/login`;
  }

  const userName = document.querySelector('#name')?.value;
  const password = document.querySelector('#password')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ email: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) {
    localStorage.setItem("currentUser", userName);
    window.location.href = 'home.html';
  } else {
    const body = await response.json();
    document.getElementById("desc").innerHTML = "Invalid Login";
    document.getElementById("desc").style.color = "red";
  }
}
  
function logout() {
  localStorage.setItem("currentUser","User");
  fetch(`/api/auth/logout`, {
    method: 'delete',
  });
}

async function getUser(email) {
  let scores = [];
  // See if we have a user with the given email.
  const response = await fetch(`/api/user/${email}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}

function insertUsername(){
  const userEl = document.getElementById("user");
  if(userEl !== null){
    userEl.textContent = localStorage.getItem('currentUser');
  }
}

function displayQuote(data) {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#quote');

      const quoteEl = document.createElement('p');
      quoteEl.classList.add('quote');
      const authorEl = document.createElement('p');
      authorEl.classList.add('author');

      quoteEl.textContent = data.content;
      authorEl.textContent = data.author;

      containerEl.appendChild(quoteEl);
      containerEl.appendChild(authorEl);
    });
}

async function validate(){
  const response = await fetch('/api/scores');
  if (response.status !== 200) {
      window.location.href = 'index.html';
  }
}