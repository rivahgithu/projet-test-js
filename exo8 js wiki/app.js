const form = document.querySelector('form');
const input = document.querySelector('input');
const erreur = document.querySelector('.message-erreur');
const load = document.querySelector('.loader');
const resultat = document.querySelector('.resultat');
const resultatContainer = document.querySelector('.cont-resultat');

resultat.style.display = 'none';

form.addEventListener('submit', funcForm);

function funcForm(e) {
    e.preventDefault();
    if (!input.value.trim()) {
        erreur.innerText = 'Il y a eu une erreur';
        resultat.style.display = 'none';
        return;
    } else {
        erreur.textContent = '';
        load.style.display = 'flex';
        resultat.style.display = 'none';
        resultatContainer.textContent = '';

        wikipedia(input.value);
    }
}



async function wikipedia(recherche) {
    try {
        const reponse = await fetch(
            `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${encodeURIComponent(recherche)}`
        );
        console.log(reponse.ok);
        if (!reponse.ok) {
            throw new Error(`${reponse.status}`);
        }
        const data = await reponse.json();
        console.log(data);
        card(data.query.search);
    } catch (error) {
        erreur.textContent = `${error}`;
        load.style.display = 'none';
        resultat.style.display = 'none';
    }
}


function card(data) {
    if (!data.length) {
        erreur.innerText = 'Aucun résultat trouvé';
        load.style.display = 'none';
        resultat.style.display = 'block';
        return;
    }

    data.forEach(card => {
        const url = `https://en.wikipedia.org/?curid=${card.pageid}`;
        const nvCard = document.createElement('div');
        nvCard.className = 'carte-resultat';
        
        nvCard.innerHTML = `
            <h3 class="resultat-titre">
                <a href="${url}" target="_blank">${card.title}</a>
            </h3>

            <a href="${url}" class="resultat-lien" target="_blank">
                ${url}
            </a>

            <span class="resultat-snippet">
                ${card.snippet}
            </span>

            <br>
        `;

        resultatContainer.appendChild(nvCard);
    });

    load.style.display = 'none';
    resultat.style.display = 'block';
}