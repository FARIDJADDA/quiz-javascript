const form = document.querySelector('.form-quizz');
let tabResult = [];
const response = ['b, c'];
const emojis = ['✔️', '✨', '👀', '😭', '👎 '];
const titleResult = document.querySelector('.result h2');
const textResult = document.querySelector('.note');
const helpResult = document.querySelector('.aide');
const allQuestions = document.querySelectorAll('.question-block');
let verifTab = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    for (let i = 1; i < 3; i++) {
        tabResult.push(document.querySelector(`input[name="q${i}"]:checked`).value);

    }
    console.log(tabResult);
    verifFunc(tabResult);
    tabResult = [];
});

function verifFunc(arrResult) {
    for (let a = 0; a < 2; a++) {
        if (arrResult[a] === response[a]) {
            verifTab.push(true);
        } else {
            verifTab.push(false);
        }
    }
    console.log(verifTab);
    verifTab = [];
}