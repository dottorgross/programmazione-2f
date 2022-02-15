import './App.css'
import Spesa from './components/Spesa'

function App() {
  let listaMamma = [
    'Salmone',
    'Insalata',
    'Birra',
    'Zucchero a velo'
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Spesa dove="AlìPer" lista={listaMamma} />
      </header>
    </div>
  );
}

export default App;
