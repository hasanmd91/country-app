
import React, { useState, useEffect} from 'react'

import Countries from './components/Countries';
import "./app.css";




const url = "https://restcountries.com/v3.1/all";

const App = () => {
  const[isLoading,setIsLoading] = useState(true);
  const[error, setError] =useState(null);
  const[countries, setCountries]= useState([]);

  const fetchData = async (url)=> {
    setIsLoading(true);
    try{
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    setIsLoading(false);
    setError(false);
    console.log(countries);
    
    }catch(err){
    setIsLoading(false);
    setError(err);
    }

   }

  useEffect(() => {
  fetchData(url)},[])
  

  return (
    <div>
      <h1> Country App</h1>
      {isLoading && <h2> Loading...</h2>}
      { error && <h2>{error.message}</h2>}
      { countries && <Countries  countries={countries}/> }
     

    </div>
  )
}

export default App