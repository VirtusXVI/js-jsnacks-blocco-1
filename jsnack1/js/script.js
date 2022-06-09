const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let output = "";
// uso un ciclo per controllare tutti i numeri presenti nell'array
for(let i = 0 ; i < numbers.length ; i++){
    if(numbers[i] % 2 === 0){
        // controllo se il numero è pari
        output = ` ${numbers[i]} `;
        document.getElementById("green").innerHTML += output;
    }else{
        // controllo se il numero è dispari
        output = ` ${numbers[i]} `;
        document.getElementById("red").innerHTML += output;
    }
}