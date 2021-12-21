numeri = [1, 3, 12, 84, 20,
    89, 12, 10, 8, 44,
    4, 5, 8, 12, 67];

// definisco un secondo array numeri2, vuoto
numeri2 = [];

// scrivo un ciclo for che conta da zero all'ultimo elemento di numeri
for(let i=0; i<numeri.length; i++) {
  numeri2.push(numeri[i]**2);
}

// scrivo nella console il contenuto del secondo array
console.log(numeri2);