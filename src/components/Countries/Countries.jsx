import React, { use } from 'react'
import './Countries.css'
import Country from '../Country/Country';

function Countries({ countriesPromise }) {
    const countriesdata = use(countriesPromise);
    const countries = countriesdata.countries;
    return (
        <div>
            <h1>Countries {countries.length} </h1>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
                }
            </div>
        </div>
    )
}

export default Countries