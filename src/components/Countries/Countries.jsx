import { useState } from 'react'
import { useEffect } from 'react';
import Country from '../Country/Country';
import './countries.css'
const Countries = () => {

    const [countries,setCountries] = useState([]);

    const [visitedCountries,setVisitedCountries] = useState([]);

    const [visitedFlag,setVisitedFlag] = useState([]);

    const handleVisitedFlag = flags=>{
        const newVisitedFlag = [...visitedFlag,flags];
        setVisitedFlag(newVisitedFlag);
        
        
    }

    const handleVisitedCountry = country => {
        console.log(country)
        const newVisitedCountry=[...visitedCountries,country];
        setVisitedCountries(newVisitedCountry);
        
        // const visitList=document.getElementById('visitedList');
        // visitList.innerHTML=`
        //     <ul>${country}</ul>
        
        // `;
        
    }


    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
    },[]);
    
    return (
        <div>
        
          <h1>countries:{countries.length}</h1>
          <div>
            <h4>Visited countries</h4>
            <ul >
                {
                    visitedCountries.map(country => <li  key={country.cca3}>{country.name.common}</li>)
                }

            </ul>
          </div>
          <div>
            <h4>Visited Country Flag</h4>
            <div className='flag-container'>
                {
                    visitedFlag.map((flag,idx) => <img key={idx} src={flag.png}></img>)
                }
            </div>
          </div>
          <div className='country-container'>
          {
            countries.map(country => <Country  key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedFlag={handleVisitedFlag}></Country>)
          }

          </div>
          
        
        </div>
    );
};

export default Countries;