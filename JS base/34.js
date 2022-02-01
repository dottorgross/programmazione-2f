/*
Definisci gli oggetti JavaScript
che servono per creare un'applicazione che faccia
l'inventario informatico del CFP.
*/

// JSON JavaScript Object Notation

let i5865 = {
    tipo: 'processore',
    produttore: 'intel',
    modello: '5865',
    frequenza: 3.2
}

let crucial12000 = {
    capacità: 16,
    produttore: 'crucial',
    modello: '12000'
}

let asus8000 = {
    produttore: 'asus',
    modello: '8000'
}

let computer = {
    cpu: i5865,
    ram: crucial12000,
    motherboard: asus8000
}

console.log(computer)