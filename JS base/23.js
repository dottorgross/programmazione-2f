/*
Dato un array contenente una serie di sottoarray del tipo [‘nome’,numero],
fare in modo che il programma ripeta i vari nomi per il numero di volte indicato dal numero.
Ad esempio [[‘Paolo’,2],[‘Marzia’,3]] produrrà:
Paolo
Paolo
Marzia
Marzia
Marzia
*/

// definisco l'array nomeri (nomi e numeri)
let nomeri = [['Paolo',2],['Marzia',3]];

// ciclo for che si passa tutti i nomeri
//      metto in una variabile il nomero corrente
//      metto in una variabile nome il nome prendendolo dal nomero
//      metto in una variabile numero il numero prendendolo dal nomero
//      ciclo for che conta da 1 a numero
//          scrivo il nome

for(let i=0; i<nomeri.length; i++) {
    let nomero = nomeri[i];
    let nome = nomero[0];
    let numero = nomero[1];
    for(let i=1; i<=numero; i++) {
        console.log(nome);
    }

}