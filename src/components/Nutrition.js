import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [nutritionData, setNutritionData] = useState({});

  const searchNutrition = async () => {
    try {
      const response = await axios.get('https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition', {
        params: {
          query: query
        },
        headers: {
          'X-RapidAPI-Key': 'b3dfb8f7b8msha0eaad859512734p19b383jsn246bf84a36ce',
          'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
        }
      });
      setNutritionData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
  )