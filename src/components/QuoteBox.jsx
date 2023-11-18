import './styles/QuoteBox.css'

const QuoteBox = ({ quote, handleChangeQuote }) => {
    const { phrase, author } = quote
    console.log(quote);
    return (
        <article className="quoteBox">
            <h1 className="quoteBox__title">INFOGALAX</h1>
            <div className="quoteBox__box">
                <p>{phrase}</p>
            </div>
            <button className="quoteBox__btn" onClick={handleChangeQuote}>
                <img src="./pub" alt="" />
            </button>
            <span className="quoteBox__author">{author}</span>
        </article>
    )
}
export default QuoteBox