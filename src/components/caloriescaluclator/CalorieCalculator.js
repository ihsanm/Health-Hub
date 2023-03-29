import React, { useEffect, useState } from 'react'
import '../../App.css'


// async function result (intensitylevel) {
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'b37364f82fmshaeba03fc70db41dp1d070djsn1ba926350f43',
//       'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
//     }
//   }
//   const res = await fetch(
//     `https://fitness-calculator.p.rapidapi.com/activities?intensitylevel=${intensitylevel}`,
//     options
//   )
//   return await res.json()
// }

// export default function CalorieSearchResults () {
//   const [results, setResults] = useState(null)

//   const handleClick = async intensitylevel => {
//     try {
//       const response = await result(intensitylevel)
//       console.log(response)
//       setResults(response.data)
//     } catch (err) {
//       setResults({ error: 'Search not found' })
//     }
//   }
//   function Filter ({ results, handleClick }) {
//     const [activities, setActivities] = useState([])

//     return (
//       <div className='filter-container'>
//         <button onClick={() => handleClick(1)}>Intensity Level 1</button>
//         <button onClick={() => handleClick(2)}>Intensity Level 2</button>
//         <button onClick={() => handleClick(3)}>Intensity Level 3</button>
//       </div>
//     )
//   }
//   return (
//     <div className='CalorieSearchResults'>
//       <h1>Let's look up Search results</h1>

//       <Filter handleClick={handleClick} results={results} />

//       {results && (
//         <div className='results'>
//           <h2>Search Results</h2>
//           <ul>
//             {results.map(result => (
//               <div key={result._id}>{result.description}</div>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   )
// }

function CalorieCounter() {

  const [exercise, setExercise] = useState("");
  const [exerciseData, setExerciseData] = useState([]);
  useEffect(()=> {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'dafe2755a1mshcf91c9677212dc0p1a457bjsnfb2e997bea5a',
      'X-RapidAPI-Host': 'calories-burned-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  fetch('https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=' + exercise, options)
    .then(response => response.json())
    .then(response => setExerciseData(response))
    .catch(err => console.error(err));
    }, [exercise])

  return (
    <div>
      <form className='food-form'>
        <input
          className='food-input'
          type="text"
          placeholder="Enter exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
      </form>

      {exerciseData.length > 0 && (
        
        <div>
          {exerciseData.map((e) => (
            <div>
            <p>Name: {e.name}</p>
            <p>Total Calories: {e.total_calories}</p>
            </div>
          ))}
        </div>
      )}
      
      
    </div>

  )
}

export default CalorieCounter