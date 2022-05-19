
import React, { useState, useEffect} from 'react'

const url = "https://restcountries.cm/v3.1/all";

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
    
    } catch(err){
      setIsLoading(false);
      setError(err);
    }

  }

  useEffect(() => {
    fetchData(url)
    console.log("useeffect is used ")
  }, [])
  

  return (
    <div>
      <h1> Country App</h1>
      {isLoading && <h2> Loading...</h2>}
      { error && <h2>{error.message}</h2>}

    </div>
  )
}

export default App