import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Quote from './quote'

const AllQuotes = (props) => {

    const [quotes, setQuotes] =useState([])

    useEffect(() => {
        axios
            .get(`https://quote-garden.herokuapp.com/api/v3/quotes/random`)
            .then((res) => {
                setQuotes(res.data.data)
            })
            .catch((err) => {
                console.log('problems getting data', err)
            })
    }, [])

    console.log('quotes', quotes)

    return (
        <div className='quotes'>
        <h2>Random Quote</h2>
        <Quote quotes={quotes} />
        </div>
    )
}

export default AllQuotes