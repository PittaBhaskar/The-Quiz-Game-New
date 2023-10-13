gamer1_name = localStorage.getItem("gamer1_name")
gamer2_name = localStorage.getItem("gamer2_name")

gamer1_score =0;
gamer2_score =0;

 document.getElementById("gamer1_name").innerHTML = gamer1_name + " : ";
 document.getElementById("gamer2_name").innerHTML = gamer2_name + " : ";

document.getElementById("gamer1_score").innerHTML = gamer1_score ;
document.getElementById("gamer2_score").innerHTML = gamer2_score ;
