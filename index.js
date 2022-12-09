let aleatorio = Math.floor(Math.random() * 6) + 1; 
let aleatorioimagen = "dice" + aleatorio + ".png"; 
let imagenrecurso = "images/" + aleatorioimagen; 
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imagenrecurso);
let aleatorio2 = Math.floor(Math.random() * 6) + 1;
let recurso2 = "images/dice" + aleatorio2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", recurso2);
if (aleatorio > aleatorio2) {
  document.querySelector("h1").innerHTML = "🏆 Play 1 Wins!";
}
else if (aleatorio2 > aleatorio) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
}
else {
  document.querySelector("h1").innerHTML = "🏆Draw!🏆";
}
