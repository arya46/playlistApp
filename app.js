var playlist = new Playlist();

var doIWannaKnow = new Song("Do I Wanna Know", "Arctic Monkeys", "3:23");
var wildHorses = new Song("Wild Horses", "The Rolling Stones", "5:49");
var fastCar = new Song("Fast Car", "Tracy Chapman", "3:48");

var logan = new Movie("Logan", 2013, "2:49:00")

playlist.add(doIWannaKnow);
playlist.add(wildHorses);
playlist.add(fastCar);

playlist.add(logan);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}
