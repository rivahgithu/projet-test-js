const titre = document.querySelector('.titre');
const suivent = document.querySelector('.suivent');
const retour = document.querySelector('.retour');
const play = document.querySelector('.play-pause');
const audio = document.querySelector('.audio');

const liste = [
    {
      src: "./music/Fally.mp3",
      nom: "son 1",
    },
    {
      src: "./music/Hiro.mp3",
      nom: "son 2",
    }
]
    
let musiquePlay = false;


function playMusique(){
    musiquePlay = true;
    audio.play();
    play.classList.add('active');
    play.innerHTML = `<ion-icon name="play-outline"></ion-icon>`;
}

function pauseMusique(){
    musiquePlay = false;
    audio.pause();
    play.classList.remove('active');
    play.innerHTML = `<ion-icon name="pause-outline"></ion-icon>`;
}

play.addEventListener('click', ()=> (musiquePlay ? 
pauseMusique() : playMusique()));

function loadMusique(liste){
    titre.textContent = liste.nom;
    audio.src = liste.src;
}

let i = 1;

loadMusique(liste[i])


function retourMusique(){
     i--;
    if(i < 0){
        i = liste.length - 1;
    }
    loadMusique(liste[i]);
    playMusique();
}

retour.addEventListener('click', retourMusique)

function suiventMusique(){
    i++;
    if(i > liste.length -1){
        i=0;
    }
    loadMusique(liste[i]);
    playMusique();
}

suivent.addEventListener('click', suiventMusique)