let username;

document.getElementById("go").onclick = function() {
  username = document.getElementById("name").value;
  document.getElementById("h1").textContent = `hello ${username}`;
  console.log(username);
};
