// scrivere un programma che dati
// il prezzo del biglietto
// l'età delle persone
// e il numero di persone
// calcoli il totale da pagare
// e lo scriva in una frase
// nota: bisognerà definire due prezzi, uno per i minorenni
// e uno per i maggiorenni

// definisco il prezzo del biglietto intero
let prezzoMaggiorenni = 7.50;

// definisco il prezzo del biglietto ridotto
let prezzoMinorenni = 5.50;

// definisco il numero di persone
let numero = 4;

// definisco l'età
let anni = 12;

// definisco una variabile per il totale
let totale;

// se è minorenne
if(anni<18) {
// calcolo il totale col prezzo ridotto
    totale = numero * prezzoMinorenni;
}
// altrimenti
else {
    // calcolo il totale col prezzo intero
    totale = numero * prezzoMaggiorenni;
}

// scrivo la frase
console.log("Il totale da pagare è di " + totale + " €");