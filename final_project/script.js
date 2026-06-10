const btnPosition = document.getElementById('btn-position');
const btnDistance = document.getElementById('btn-distance');
const infoBox = document.getElementById('earth-info');

function showPosition() {
    infoBox.textContent = "Earth orbits the Sun at an average distance of 93 million miles, tilted at 23.5 degrees.";
    infoBox.className = "info-box info-box--accent";
}

function showDistance() {
    infoBox.textContent = "Earth is exactly 1 AU (Astronomical Unit) from the Sun, placed perfectly in the Habitable Zone.";
    infoBox.className = "info-box info-box--cyan";
}

if (btnPosition && btnDistance) {
    btnPosition.addEventListener('click', showPosition);
    btnDistance.addEventListener('click', showDistance);
}

const btnFact = document.getElementById('btn-fact');
const planetInfo = document.getElementById('planet-info');

const facts = [
    "Jupiter is so large that over 1,300 Earths could fit inside it.",
    "A day on Venus is longer than a year on Venus—it takes 243 Earth days to rotate once.",
    "Saturn's rings are mostly made of chunks of ice and rock, some as small as grains of sand.",
    "Neptune's winds can reach speeds of over 1,200 miles per hour.",
    "Mercury has no atmosphere, so there is no weather, wind, or rain on its surface.",
    "Mars has the tallest volcano in the solar system—Olympus Mons, about 72,000 feet high.",
    "Uranus rotates on its side, with an axial tilt of about 98 degrees."
];
let factIndex = 0;

function showFact() {
    planetInfo.textContent = facts[factIndex];
    planetInfo.className = "info-box info-box--cyan";
    factIndex = (factIndex + 1) % facts.length;
}

if (btnFact && planetInfo) {
    btnFact.addEventListener('click', showFact);
}
