function addUser() {
    player1_name = document.getElementById("gamer1_name_input").value;
     player2_name = document.getElementById("gamer2_name_input").value;
    localStorage.setItem("gamer1_name", player1_name);
    localStorage.setItem("gamer2_name", player2_name);
    
    window.location = "game_page.html";
}