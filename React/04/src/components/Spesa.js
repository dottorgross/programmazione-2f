export default function Spesa(props) {
    let elementi = props.lista.map(nome => <li>{nome}</li>)
    
    return (
        <div>
            <h1>Lista della spesa da fare nel negozio {props.dove}</h1>
            <ul>
                {elementi}
            </ul>
        </div>
    )
}