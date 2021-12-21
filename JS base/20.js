// Definisci un array contenente 10 parole a piacere.
// Copia in un secondo array solo le parole che hanno meno di 6 caratteri
// suggerimento: puoi usare il metodo .length per calcolare la lunghezza di una parola

let parole = [  'cane', 'gatto', 'teso',
                'lorenzo', 'laccio', 'rappresentante',
                'rompiscatole', 'simpatico', 'carinissimo', 'lecchino', 'chiara', 'zaza'
            ];

let parole2 = [];

for (i = 0; i < parole.length; i++) {
    if(parole[i].length < 6) {
        parole2.push(parole[i]);
    }
}

console.log(parole2);