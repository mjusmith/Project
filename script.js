function mapSwapU() {
    var image = document.querySelector('#mapImg');
    image.src = 'static/abyss_upper.jpg';
    image.alt = 'Upper Abyss'
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


}