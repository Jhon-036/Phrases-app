import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox';
import quotes from './db/quotes.json'
import { getRandomElement } from './utils/random';

const bgs = ['bg1', 'bg2', 'bg3', 'bg4']
const planets = ['planet1', 'planet2', 'planet3', 'planet4']

function App() {
  
  const [quote, setQuote] = useState(getRandomElement(quotes))
  const [currentBg, setCurrentBg] = useState(getRandomElement(bgs))
  const [currentPlanet, setCurrentPlanet] = useState(getRandomElement(planets))
  

  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes))
    setCurrentBg(getRandomElement(bgs))
    setCurrentPlanet(getRandomElement(planets))
  }
  console.log(quote);

  return (
    <main className={`App ${currentBg}`}>
       <QuoteBox quote={quote} handleChangeQuote={handleChangeQuote} currentPlanet={currentPlanet}/>
    </main>
  )
}

export default App
