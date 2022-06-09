// chiedo all'utente di inserire un numero con 4 cifre
let userNumber = prompt("inserisci un numero di 4 cifre");
let sum = 0;
// usando il ciclo for prendo singolarmente ogni cifra della stringa
for(let i = 0 ; i < userNumber.length ; i++){
    // prendo ogni cifra della stringa e la sommo alla variabile sum
    sum += parseInt(userNumber[i]);
}
// output
alert(`la somma dei numeri da te inseriti è ${sum}`);