let elementoDaInserire = (
    <div>
        <h1>Gatti e papere</h1>
        <p>Nei nostri esercizi abbiamo parlato spesso di gatti e papere.</p>
    </div>
)

function Titolo() {
    return (
        <h1>Guarda che bel titolo!</h1>
    )
}

ReactDOM.render(
    <div>
        <Titolo />
        <Titolo />
        <Titolo />
    </div>,
    document.getElementById('root')
)