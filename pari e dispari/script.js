let scelta = prompt("Scegli pari o dispari");
let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
let numeroComputer = Math.floor(Math.random() * 5) + 1;

console.log("Numero scelto dall'utente: " + numeroUtente);
console.log("Numero scelto dal computer: " + numeroComputer);

let somma = numeroUtente + numeroComputer;

function isPari(num) {
if (num % 2 == 0) {
return true;
} else {
return false;
}
}

if ((isPari(somma) && scelta == "pari") || (!isPari(somma) && scelta == "dispari")) {
console.log("Hai vinto!");
} else {
console.log("Hai perso!");
}



