// scrivere una funzione siri che, in base alla parola che riceve
// risponde con una frase opportuna

function siri(parola) {
    // ciao
    // Buongiorno, sono Siri e sono felice di conoscerti.

    // fanciullo
    // Non mi sembra il caso di essere volgare.

    // sbronza
    // A questo punto mi ritiro nel mio cloud.

    // scusa
    // Scuse accettate è un piacere parlare con te

    // se dice altro
    // Non ho capito, puoi spiegarti meglio?

    let risposta
    switch(parola) {
        case 'ciao':
            risposta = "Buongiorno, sono Siri e sono felice di conoscerti.";
            break;
        case 'fanciullo':

        // ...

        default:
            risposta = "Non ho capito, puoi spiegarti meglio?"
    }

    console.log(risposta)
}

siri("fanciullo")
siri("ciao")
siri("sconosciuta")