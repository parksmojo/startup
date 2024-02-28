function login() {
    const nameEl = document.querySelector("#name");
    if(nameEl.value === ""){
      document.getElementById("desc").innerHTML = "Invalid username";
      document.getElementById("desc").style.color = "red";
    } else {
      localStorage.setItem("userName", nameEl.value);
      window.location.href = "home.html";
    }
  }
  