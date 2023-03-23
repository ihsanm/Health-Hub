import React, { useState } from 'react';
import axios from 'axios';

function Nutrition() {
  const [searchQuery, setSearchQuery] = useState("");
  const [nutritionData, setNutritionData] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get('https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition', {
      params: {
        query: searchQuery
      },
      headers: {
        'X-RapidAPI-Key': 'b3dfb8f7b8msha0eaad859512734p19b383jsn246bf84a36ce',
        'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
      }
    });
    console.log(response.data);
    setNutritionData(response.data);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (searchQuery !== '') {
      handleSearch();
    }
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Enter a food item"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {nutritionData.length > 0 && (
        <div>
          {nutritionData.map((nutrition) => (
            <div key={nutrition.name}>
              <h2>{nutrition.name}</h2>
              <ul>
                <li>Calories: {nutrition.calories}</li>
                <li>Protein: {nutrition.protein_g}g</li>
                <li>carbohydrates: {nutrition.carbohydrates_total_g}g</li>
                <li>Fat: {nutrition.fat_total_g}g</li>
                <li>Sugar: {nutrition.sugar_g}g</li>
                <li>Sodium: {nutrition.sodium_mg}mg</li>
                <li>Fiber: {nutrition.fiber_g}g</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Nutrition;
