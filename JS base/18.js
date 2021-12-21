// PROBLEMA
// Dato un array contenente una lista di 15 numeri,
// creare un altro array contenente solo i numeri di questa lista
// che sono minori di 10.

// SOLUZIONE
// definisco un array numeri, con 15 numeri al suo interno
numeri = [1, 3, 12, 84, 20,
          89, 12, 10, 8, 44,
          4, 5, 8, 12, 67];

// definisco un secondo array numeri2, vuoto
numeri2 = [];

// scrivo un ciclo for che conta da zero all'ultimo elemento di numeri
for(let i=0; i<numeri.length; i++) {
//      se numeri[i] è minore di 10
    if (numeri[i] < 10) {
//          inserisco questo numero nel secondo array
        numeri2.push(numeri[i]);
    }
}

// scrivo nella console il contenuto del secondo array
console.log(numeri2);