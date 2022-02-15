import './App.css'
import Navbar from './components/Navbar'
import NavbarJack from './components/NavbarJack'
import Carousel from './components/Carousel'
import Card from './components/Card'
import Footer from './components/Footer'

export default function App() {
  // array che contiene una serie di oggetti con le caratteristiche dei link della navbar
  let links = [
    {
      titolo: 'Home',
      url: '/'
    },
    {
      // ogni oggetto ha due proprietà: il titolo e l'url da inserire nei link
      titolo: 'Sparatutto',
      url: 'https://sparatutto.gamestop.com'
    },
    {
      titolo: 'VR',
      url: 'https://vr.gamestop.com'
    },
    {
      titolo: 'Azione',
      url: 'https://azione.gamestop.com'
    },
    {
      titolo: 'Avventura',
      url: 'https://avventura.gamestop.com'
    }
  ]

  let slides = [
    {
      immagine: 'uncharted.jpg',
      titolo: 'UNCHARTED',
      testo: 'Il gioco preferito da Leonardo!'
    },
    {
      immagine: 'uncharted.jpg',
      titolo: 'UNCHARTED',
      testo: 'Il gioco preferito da Leonardo!'
    },
    {
      immagine: 'uncharted.jpg',
      titolo: 'UNCHARTED',
      testo: 'Il gioco preferito da Leonardo!'
    }
  ]
  
  return (
    <div>
      <Carousel slides={slides} />
      <NavbarJack nome="Game Stop!" links={ links } />
      
      <div className="container">
        <div className="row">
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
