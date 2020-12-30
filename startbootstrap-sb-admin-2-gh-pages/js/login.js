var loginBtn = document.getElementById("loginBtn");

const rmCheck = document.getElementById("rememberMeCheckBox"),
    emailInput = document.getElementById("InputEmail"),
    passInput = document.getElementById("InputPassword");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
  passInput.value = localStorage.pass;
} else {
  rmCheck.removeAttribute("checked");
  emailInput.value = "";
  passInput.value = "";
}

rememberMeCheckBox.onclick = function() {
  if (rmCheck.checked && emailInput.value !== "" && passInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.pass = passInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.pass = "";
    localStorage.checkbox = "";
  }
}

loginBtn.onclick = function(){
    
}