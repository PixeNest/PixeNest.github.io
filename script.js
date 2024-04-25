function toggleMenu() {
    var nav = document.getElementById('menu');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}
// Function to display a welcome message when the page loads
window.onload = function() {
  alert("Welcome to PixeNest-beta- PixeNest is in development and is not ready for public use. Please check back later but you can join our discord server for update. Thank you for your understanding.");
};

// Function to toggle visibility of game description
function toggleDescription(gameId) {
  var description = document.getElementById(gameId + '-description');
  if (description.style.display === "none") {
    description.style.display = "block";
  } else {
    description.style.display = "none";
  }
}

// Function to play a game (placeholder function)
function playGame(gameId) {
  alert("Playing " + gameId + "!");
}
