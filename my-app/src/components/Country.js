import React from 'react'



const Country = (props) => {
    const{country} = props;
    const{name, flags, capital, population, area}= country;

  return (
    <div>Country</div>
  )
}

export default Country