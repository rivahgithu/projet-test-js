const rep = ["b", "c", "d", "c", "b", "c"];
const form = document.querySelector('.quizz-form');

form.addEventListener('submit', funcForm);

function funcForm(e) {
    e.preventDefault();
    const resultat = [];
    const tousLesBoutonsRadios = document.querySelectorAll(
        "input[type='radio']:checked"
    );
    tousLesBoutonsRadios.forEach((radioButtons, index) => {
        if (radioButtons.value === rep[index]) {
            resultat.push(true);
        } else {
            resultat.push(false);
        }

    });

    funcResultat(resultat);
}

const resultat = document.querySelector('.resultat');
const titreResultat = document.querySelector('.resultat h2');
const scoreResultat = document.querySelector('.resultat .score');
const infoResultat = document.querySelector('.resultat .info');

function funcResultat(res) {
    const nombreErreurs = res.filter(el => el === false).length;
    console.log("Nombre d'erreurs :", nombreErreurs);

    switch(nombreErreurs){
        case 0:
            resultat.style.backgroundColor ="rgb(125,241,129)"
            titreResultat.innerHTML = `🥰 Félicitation, c'est sans faute 🎉!`;
            infoResultat.innerHTML = `👏👏👏`
            scoreResultat.innerHTML = `Score <span> 6 / 6 </span>`;
            break;
        case 1:
            resultat.style.backgroundColor ="rgb(241,125,125)"
            titreResultat.innerHTML = `😅 Il y a ${nombreErreurs} erreurs 😅!`;
            infoResultat.innerHTML = `Presque !!!`
            scoreResultat.innerHTML = `Score <span> 5 / 6 </span>`;
            break;
        case 2:
            resultat.style.backgroundColor ="rgb(241,125,125)"
            titreResultat.innerHTML = `😅 Il y a ${nombreErreurs} erreurs 😅!`;
            infoResultat.innerHTML = `Oups !!!`
            scoreResultat.innerHTML = `Score <span> 4 / 6 </span>`;
            break;
        case 3:
            resultat.style.backgroundColor ="rgb(241,125,125)"
            titreResultat.innerHTML = `😅 Il y a ${nombreErreurs} erreurs 😅!`;
            infoResultat.innerHTML = `Oups !!!`
            scoreResultat.innerHTML = `Score <span> 3 / 6 </span>`;
            break;
        case 4:
            resultat.style.backgroundColor ="rgb(241,125,125)"
            titreResultat.innerHTML = `😅 Il y a ${nombreErreurs} erreurs 😅!`;
            infoResultat.innerHTML = `Oups !!!`
            scoreResultat.innerHTML = `Score <span> 2 / 6 </span>`;
            break;
        case 5:
            resultat.style.backgroundColor ="rgb(241,125,125)"
            titreResultat.innerHTML = `😅 Il y a ${nombreErreurs} erreurs 😅!`;
            infoResultat.innerHTML = `Oups !!!`
            scoreResultat.innerHTML = `Score <span> 1 / 6 </span>`;
            break;
        case 6:
            resultat.style.backgroundColor ="rgb(241,125,125)"
            titreResultat.innerHTML = `😭 Il y a ${nombreErreurs} erreurs 😭!`;
            infoResultat.innerHTML = `Tu as tout faut !!!`
            scoreResultat.innerHTML = `Score <span> 0 / 6 </span>`;
            break;
        default:
            titreResultat.innerHTML = `Il y a une erreur` 
    }   
}