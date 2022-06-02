//check for Navigation Timing API support
if (window.performance) {
  console.info("window.performance works fine on this browser");
  document.querySelector(".reload-img").setAttribute("onclick", "onClickNuni()");
}
console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  console.info("This page is reloaded");
  document.querySelector(".reload-img").setAttribute("onclick", "location.reload()");
// Change the dice image
  var randomNumber1 = Math.ceil(Math.random() * 6); //1-6
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");//change Player1's dice image src
  var randomNumber2 = Math.ceil(Math.random() * 6); //1-6
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");//change Player2's dice image src

// Change 'h1' and 'p'w' depend on the winning player
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
    document.querySelectorAll("p")[0].innerHTML = "<strong>player1</strong>"
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
    document.querySelectorAll("p")[1].innerHTML = "<strong>player2</strong>"
  } else {
    document.querySelector("h1").innerHTML = "Draw!"
  }


} else {
  console.info("This page is not reloaded");
}

function onClickNuni(){
  alert("תהני מהמשחק רובא!");
  location.reload();
}
