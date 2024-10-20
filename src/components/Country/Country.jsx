import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry,handleVisitedFlag}) => {
    console.log(country);
    const {name,flags,population,area,cca3} = country;
    const [visited,setVisited]=useState(false);
    const handleVisited = () => {
        setVisited(!visited);
        
    }
    const handleVisitedClick = () => {
        handleVisitedCountry(country);
        handleVisitedFlag(flags);
    };
    console.log(handleVisitedCountry)
    return (
        <div  className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited? 'purple' : 'black'}}>Name: {name.common}</h3>
            <img className='flag-Style'  src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p>Code:{cca3}</p>
            <button onClick={handleVisitedClick}>Mark visited</button><br /><br />
            <button onClick={handleVisited}>{visited?'Visited':'Going'}</button>
             <br />
             {visited?'I have visited this country':'I want to visit'}
            
            
        </div>
    );
};

export default Country;