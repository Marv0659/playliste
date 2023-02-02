const songs = ["Going Bad", "Gods Plan", "Jimmy Crooks", "Whats next", "Hot", "Lucid Dreams", "All Girls Are the Same", "When im gone", "Ferrari", "Empty"];

const liste = document.querySelector("ul");

songs.forEach(lavFrugtListe);

function lavFrugtListe(songs) {
  liste.innerHTML += "<li>" + songs + "</li>";
}
