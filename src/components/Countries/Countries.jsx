import React, { use, useState } from 'react'
import './Countries.css'
import Country from '../Country/Country';

function Countries({ countriesPromise }) {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        console.log("Clicked",country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const countriesdata = use(countriesPromise);
    const countries = countriesdata.countries;
    return (
        <div>
            <h1>Countries {countries.length} </h1>
            <h3>Total Country Visited : {visitedCountries.length}</h3>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    )
}

export default Countries