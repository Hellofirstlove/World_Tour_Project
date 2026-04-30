import React from 'react'
import './Country.css'

function Country({country}) {
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name : {country.name.common}</h3>
            <h5>Population : {country.population.population}</h5>
        </div>
    )
}

export default Country