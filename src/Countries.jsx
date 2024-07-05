import { useState, useEffect } from 'react'; 
import './Countries.css'

const CountryCard=({name, flagImg, flagAlt})=>{
    return(
        <div className="card">
            <img className='img' src={flagImg} alt={"flag of "  + flagAlt}/>
            <h2>{name}</h2>
        </div>
    )
}

function Countries(){
    const API_URL = " https://xcountries-backend.azurewebsites.net/all";
    const [countries, setCountries] =useState([]);
    console.log({countries})

    useEffect(() =>{
        fetch(API_URL).then(res => res.json()).then(data =>{setCountries(data)}).catch((error) => console.error("Error fetching data:" , error.message));
    },[])

    return (
        <div className='display'>
            {countries.map((country) =>( 
                <CountryCard 
                    key={country.abbr} 
                    name={country.name} 
                    flagImg={country.flag} 
                    flagAlt={country.abbr}
                />
            ))}
        </div>
    )
}

export default Countries;