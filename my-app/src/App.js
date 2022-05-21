
import React, { useState, useEffect} from 'react'

import Countries from './components/Countries';
import "./app.css";
import Search from './components/Search';




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

    
    }catch(err){
    setIsLoading(false);
    setError(err);
    }

   }

  useEffect(() => {
  fetchData(url)},[]);

  const handleRemoveCountry= (name)=> {
   const filterCountries =  countries.filter((country) => {
      return country.name.common !== name   });
      setCountries(filterCountries);
  }

  const handleSearch = (searchValue)=>{
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country)=> {
      const countryName = country.name.common.toLowerCase(); 
      return countryName.startsWith(value) //The startsWith() method returns true if a string starts with a specified string.
    })
    setCountries(newCountries)
  }

  return (
    <div>
      <h1> Country App</h1>
      <h1> <Search  onSearch={handleSearch}/> </h1>
      {isLoading && <h2> Loading...</h2>}
      { error && <h2>{error.message}</h2>}
      { countries && <Countries  countries={countries} onRemoveCountry={handleRemoveCountry}/> }
     

    </div>
  )
}

export default App