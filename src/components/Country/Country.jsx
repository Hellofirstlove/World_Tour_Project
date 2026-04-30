import { useState } from 'react'
import React from 'react'
import './Country.css'

function Country({country, handleVisitedCountries}) {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country);
    }

    return (
        <div className={visited ? 'country visited' : 'country'}>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name : {country.name.common}</h3>
            <h5>Population : {country.population.population}</h5>
            <p>Area : {country.area.area} { country.area.area > 30000 ? 'Big' : 'Small' }</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    )
}

export default Country