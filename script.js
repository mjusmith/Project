function mapSwapU() {
    var image = document.querySelector('#mapImg');
    image.src = 'static/abyss_upper.jpg';
    image.alt = 'Upper Abyss'
}

function bgSwapA() {
    document.getElementById("bgHolder").style.backgroundImage = "url(./static/altgard.jpg)";
    var image = document.querySelector('#raceImg');
    image.src = 'static/asmo_ranger.png';
    image.alt = 'Female Asmodian Ranger';
}
function bgSwapE() {
    document.getElementById("bgHolder").style.backgroundImage = "url(./static/eltnen.jpg)";

}