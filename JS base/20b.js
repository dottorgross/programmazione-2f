// prepara un array contenente il prezzo di dieci prodotti (usa numeri con la virgola, tipo 8.20)

// prepara un secondo array e inserisci dentro a questo solo i prezzi minori di 5 euro
// (fallo usando un ciclo for)

let prezzi = [1.0, 2.3, 5.2, 8.2, 10.2, 7.2];

let prezzi2 = [];

for(let i=0; i<prezzi.length; i++) {
    if(prezzi[i] < 5) {
        prezzi2.push(prezzi[i]);
    }
}

console.log(prezzi2);