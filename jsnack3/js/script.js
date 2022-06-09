// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// dichiaro la variabile sum che contine il risultato finale
let sum = 0;
for(let i = 0 ; i < 10 ; i++){
    // chiedo il numero all'utente
    let userNumber = parseInt(prompt("inserisci un numero"));
    // sommo i numeri che mi ha dato l'utente nella variabile sum
    sum = sum + userNumber;
}
// output
document.querySelector("#output").innerHTML = sum;