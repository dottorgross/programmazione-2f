// definire un array contenente 8 nomi di fiori
// quindi scriverli saltandone uno ogni due

/*
margherita
rosa
mughetto
primula
viola
giglio
lillà
bucaneve
*/

let fiori = [
    'margherita', 'rosa',
    'mughetto', 'primula',
    'viola', 'giglio',
    'lillà', 'bucaneve'
];

for(let i=0; i < fiori.length; i=i+2) {
    console.log(fiori[i]);
}