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
  localStorage.removeItem("currentUser");
}

function insertUsername(){
  const userEl = document.getElementById("user");
  if(userEl !== null){
    userEl.textContent = localStorage.getItem('currentUser');
  }
}