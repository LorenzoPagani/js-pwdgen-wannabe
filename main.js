const firstName = prompt("Inserisci il tuo nome");
const lastName = prompt("Inserisci il tuo cognome");
const color = prompt("inserisci il tuo colore preferito");
const randomInt = Math.floor(Math.random() * 99);

/* randomization */

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

function generateAnagram(str) {
    const strArr = str.split(''); 
    shuffleArray(strArr); 
    return strArr.join(''); 
}


const original = `${firstName}${lastName}${color}#${randomInt}`;
const anagram = generateAnagram(original);
console.log(anagram);


document.getElementById("userName").innerHTML = `Ciao, ${firstName}`;
document.getElementById("password").innerHTML = `La tua password è: ${anagram}`;
