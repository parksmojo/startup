function login() {
  const nameEl = document.querySelector("#name");
  if(nameEl.value === ""){
    document.getElementById("desc").innerHTML = "Invalid username";
    document.getElementById("desc").style.color = "red";
  } else {
    localStorage.setItem("currentUser", nameEl.value);
    window.location.href = "home.html";
  }
}
  
function logout() {
  localStorage.setItem("currentUser","User");
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