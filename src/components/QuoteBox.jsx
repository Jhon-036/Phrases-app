import './styles/QuoteBox.css'

const QuoteBox = ({ quote, handleChangeQuote, currentPlanet }) => {
    //estraendo 
    const { phrase, author } = quote
  return (
    <article>
        <h1 className="quoteBox__title">INFOGALRAX</h1>
        <div className="quoteBox__box">
            <p className="quoteBox__text">{phrase}</p>
            <button onClick={handleChangeQuote} className="quoteBox__btn">
                <img src="/btn.svg" alt="btn_reload"/>
            </button>
        </div>
        <span className="quoteBox__author">{author}</span>
        <div className={`quoteBox__planet ${currentPlanet}`}></div>
    </article>
  )
}
export default QuoteBox