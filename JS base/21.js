/* creare un array libri contenente una serie di sottoarray
    ognuno dei quali contiene il titolo, l'autore e il numero di pagine di un libro
    scrivere un elenco dei soli titoli
*/


libri = [
    ['Autobiografia', 'Cappelletto, A.', 9820], // libro 1
    ['La mia amante', 'Buson, M.', 1], // libro 2
    ['Alla ricerca di una GPU','Pavan, L.', 150]  // libro 3
];

for(let i=0; i<libri.length; i++) {
    // scrive di ogni libro solo il titolo
    // suggerimento: inizia facendo scrivere nella console l'intero libro...
    console.log(libri[i][0]);
    // ...quando questo funziona seleziona solo il titolo

}
