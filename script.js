function mapSwapU() {
    var image = document.querySelector('#mapImg');
    image.src = 'static/abyss_upper.jpg';
    image.alt = 'Upper Abyss'
}

function mapSwapAlt() {
    var image = document.querySelector('#mapImg');
    image.src = 'static/altgard_game.jpg';
    image.alt = 'Altgard Map'
}

function mapSwapMor() {
    var image = document.querySelector('#mapImg');
    image.src = 'static/morheim.jpg';
    image.alt = 'Morheim Map'
}

function mapSwapBel() {
    var image = document.querySelector('#mapImg');
    image.src = 'static/beluslan.jpg';
    image.alt = 'Beluslan Map'
}

function mapSwapVer() {
    var image = document.querySelector('#mapImg');
    image.src = 'static/verteron_game.jpg';
    image.alt = 'Verteron Map'
}

function mapSwapElt() {
    var image = document.querySelector('#mapImg');
    image.src = 'static/eltnen_game.jpg';
    image.alt = 'Eltnen Map'
}

function mapSwapHei() {
    var image = document.querySelector('#mapImg');
    image.src = 'static/heiron.jpg';
    image.alt = 'Heiron Map'
}

function swapA() {
    document.getElementById("bgHolder").style.backgroundImage = "url(./static/altgard.jpg)";

    var image = document.querySelector('#raceImg');
    image.src = 'static/asmo_ranger.png';
    image.alt = 'Female Asmodian Ranger';

    var text = document.querySelector('#textTitle');
    text.innerText = 'Asmodian';

    var inText = document.querySelector('#textInfo');
    inText.innerText = 'The Asmodians live in the upper half of Atreia, known as Asmodae. Their capital city is Pandaemonium, and they follow the five Shedim Lords, the five Empyrean Lords ordered by Siel and Israphel to protect the upper foundation of the Tower of Eternity. They live in a darker, more dangerous environment than the Elyos and have thus been shaped into having a more demonic appearance.'

    var overview = document.querySelector('#mapImg');
    overview.src = 'static/asmodae_overview.png';
    overview.alt = 'Asmodae Overview';

    document.getElementById("map-1").onclick = function() {mapSwapAlt()};
    document.getElementById("map-2").onclick = function() {mapSwapMor()};
    document.getElementById("map-3").onclick = function() {mapSwapBel()};

    var inTitle = document.querySelector('#mapTitle');
        inTitle.innerText = 'Asmodae';
    
    var inTitle = document.querySelector('#map-1');
        inTitle.innerText = 'Altgard';
    
    var inTitle = document.querySelector('#map-2');
        inTitle.innerText = 'Morheim';
    
    var inTitle = document.querySelector('#map-3');
        inTitle.innerText = 'Beluslan';
        
    document.getElementById("map-1").classList.remove('glowing-border-mar');
    document.getElementById("map-2").classList.remove('glowing-border-mar');
    document.getElementById("map-3").classList.remove('glowing-border-mar');

    document.getElementById("map-1").classList.add('glowing-border-asmo');
    document.getElementById("map-2").classList.add('glowing-border-asmo');
    document.getElementById("map-3").classList.add('glowing-border-asmo');

    document.getElementById("map-1").classList.remove('glowing-border-ely');
    document.getElementById("map-2").classList.remove('glowing-border-ely');
    document.getElementById("map-3").classList.remove('glowing-border-ely');
}

function swapE() {
    
    document.getElementById("bgHolder").style.backgroundImage = "url(./static/eltnen.jpg)";
    
    var image = document.querySelector('#raceImg');
    image.src = 'static/elyos_sin.png';
    image.alt = 'Female Elyos Assassin';

    var tiText = document.querySelector('#textTitle');
    tiText.innerText = 'Elyos';

    var inText = document.querySelector('#textInfo');
    inText.innerText = 'The Elyos live in the kingdom of Elysea, which spans the lower half of Atreia. Their environment is filled with light and growth and because of this, the Elyos have been shaped into having a more lively, vibrant, "lighter" appearances. They are considered the more beautiful of the two races.'

    var overview = document.querySelector('#mapImg');
    overview.src = 'static/elysea_overview.png';
    overview.alt = 'Elysea Overview';

    document.getElementById("map-1").onclick = function() {mapSwapVer()};
    document.getElementById("map-2").onclick = function() {mapSwapElt()};
    document.getElementById("map-3").onclick = function() {mapSwapHei()};

    var inTitle = document.querySelector('#mapTitle');
    inTitle.innerText = 'Elysea';

    var inTitle = document.querySelector('#map-1');
    inTitle.innerText = 'Verteron';

    var inTitle = document.querySelector('#map-2');
    inTitle.innerText = 'Eltnen';

    var inTitle = document.querySelector('#map-3');
    inTitle.innerText = 'Heiron';

    document.getElementById("map-1").classList.remove('glowing-border-mar');
    document.getElementById("map-2").classList.remove('glowing-border-mar');
    document.getElementById("map-3").classList.remove('glowing-border-mar');

    document.getElementById("map-1").classList.add('glowing-border-ely');
    document.getElementById("map-2").classList.add('glowing-border-ely');
    document.getElementById("map-3").classList.add('glowing-border-ely');

    document.getElementById("map-1").classList.remove('glowing-border-asmo');
    document.getElementById("map-2").classList.remove('glowing-border-asmo');
    document.getElementById("map-3").classList.remove('glowing-border-asmo');
}
