// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// dichiaro l'array vuoto
let numbers = [];
for(let i = 0 ; i < 6 ; i++){
    // chiedo in input il numero all'utente
    let userNumber = prompt("inserisci un numero");
    // controllo che il numero sia pari
    if(userNumber % 2 != 0){
        numbers.push(userNumber);
    }
}
// output
document.querySelector(".output").innerHTML = numbers;