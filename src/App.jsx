import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox';
import quotes from './db/quotes.json'
import { getRandonElement } from './utils/random';

//Arrays de backgounds
const bgs = ['bg1', 'bg2', 'bg3', 'bg4']

function App() {

  //estado aleatorio de las fraces 
  const [quote, setQuote] = useState(getRandonElement(quotes))
  //estado aleatorio de los backgound 
  const [currentBg, setCurrentBg] = useState(getRandonElement(bgs))

  //funcion onclick del btn
  const handleChangeQuote = () => {
    setQuote(getRandonElement(quotes))
    setCurrentBg(getRandonElement(bgs))
  }
  
  return (
    <main className={`App ${currentBg}`}>
      <QuoteBox quote={quote} handleChangeQuote={handleChangeQuote}/>
    </main>
  )
}

export default App
