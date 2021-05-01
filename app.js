const form = document.querySelector('.form-quizz');
let tabResult = [];
const response = ['b', 'c'];
const emojis = ['✔️', '✨', '👀', '😭', '👎 '];
const titleResult = document.querySelector('.result h2');
const textResult = document.querySelector('.note');
const helpResult = document.querySelector('.aide');
const allQuestions = document.querySelectorAll('.question-block');
let arrayCheck = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    for (let i = 1; i < 3; i++) {
        tabResult.push(document.querySelector(`input[name="q${i}"]:checked`).value);

    }
    //console.log(tabResult);
    verifFunc(tabResult);
    tabResult = [];
});

function verifFunc(arrResult) {
    for (let a = 0; a < 2; a++) {
        if (arrResult[a] === response[a]) {
            arrayCheck.push(true);
        } else {
            arrayCheck.push(false);
        }
    }
    //console.log(arrayCheck);
    displayResults(arrayCheck);
    arrayCheck = [];
}

function displayResults(arrCheck) {
    const nbOfFalse = arrCheck.filter(item => item !== true).length;
    //console.log(nbOfFalse);

    switch (nbOfFalse) {
        case 0:
            titleResult.innerText = `${emojis[0]} Bravo, c'est un sans faute ! ${emojis[0]}"`
            helpResult.innerText = '';
            textResult.innerText = '2/2';
            break;
        case 1:
            titleResult.innerText = `${emojis[2]} Tu peux mieu faire... ${emojis[2]}"`
            helpResult.innerText = 'Retentes une autre réponse dans les cases rouges, puis re valides tes reponses';
            textResult.innerText = '1/2';
            break;
        case 2:
            titleResult.innerText = `${emojis[4]} Tu es complétement à côté de la plaque ! ${emojis[4]}"`
            helpResult.innerText = 'Retentes une autre réponse dans les cases rouges, puis re valides tes reponses';
            textResult.innerText = '0/2';
            break;

        default:
            return 'Wops, cas innatendu';
    }
}