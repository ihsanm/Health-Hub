import React, { useState } from 'react'

async function result (intensitylevel) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b37364f82fmshaeba03fc70db41dp1d070djsn1ba926350f43',
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
  }
  const res = await fetch(
    `https://fitness-calculator.p.rapidapi.com/activities?intensitylevel=${intensitylevel}`,
    options
  )
  return await res.json()
}

export default function CalorieSearchResults () {
  const [results, setResults] = useState(null)

  const handleClick = async intensitylevel => {
    try {
      const response = await result(intensitylevel)
      console.log(response)
      setResults(response.data)
    } catch (err) {
      setResults({ error: 'Search not found' })
    }
  }
  function Filter ({ results, handleClick }) {
    const [activities, setActivities] = useState([])

    return (
      
      <div className='filter-container'>
        <button onClick={() => handleClick(1)}>Intensity Level 1</button>
        <button onClick={() => handleClick(2)}>Intensity Level 2</button>
        <button onClick={() => handleClick(3)}>Intensity Level 3</button>
      </div>
    )
  }
  return (
    <div className='CalorieSearchResults'>
      <h1>Let's look up Search results</h1>

      <Filter handleClick={handleClick} results={results} />

      {results && (
        <div className='results'>
          <h2>Search Results</h2>
          <ul>
            {results.map(result => (
              <div key={result._id}>{result.description}</div>
            ))}
          </ul>
        </div>
      )}
    </div>
  )


}




