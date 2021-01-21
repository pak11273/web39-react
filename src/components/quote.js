import React from 'react'


const Quote = (props) => {
    return (
        <div className='data'>
        {props.quotes.map(quote => (
            <div className='info'>
                <h2>{quote.quoteAuthor}</h2>
                <h3>{quote.quoteGenre}</h3>
                <p>{quote.quoteText}</p>
            </div>
        ))}
    </div>
    )
}

export default Quote
