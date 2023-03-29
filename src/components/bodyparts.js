import React, { useState, useEffect } from "react";
import Back from "./bodyparts/Back";
import Biceps from "./bodyparts/Biceps";
import Triceps from "./bodyparts/Triceps";
import Chest from "./bodyparts/Chest";
import Legs from "./bodyparts/Legs";
import {Tab, TabList, Tabs, TabPanel} from "react-tabs"

function Bodyparts() {

  const [muscle, setMuscle] = useState("biceps")
  const [muscleData, setMuscleData] = useState([])
  useEffect(()=> {
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'dafe2755a1mshcf91c9677212dc0p1a457bjsnfb2e997bea5a',
      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle='+ muscle, options)
    .then(response => response.json())
    .then(response => setMuscleData(response))
    .catch(err => console.error(err));
  } ,[muscle])

  
    

    return (
      <Tabs className="muscle-tabs">
      <TabList className="tabs">
        <Tab className="tabs-item" onClick={()=> setMuscle("biceps")}>Biceps</Tab>
        <Tab className="tabs-item" onClick={()=> setMuscle("triceps")}>Triceps</Tab>
        <Tab className="tabs-item" onClick={()=> setMuscle("middle_back")}>Back</Tab>
        <Tab className="tabs-item" onClick={()=> setMuscle("chest")}>Chest</Tab>
        <Tab className="tabs-item" onClick={()=> setMuscle("hamstrings")}>Legs</Tab>
      </TabList>
  
      <TabPanel>
        <Biceps data={muscleData} />
      </TabPanel>

      <TabPanel>
        <Triceps data={muscleData} />
      </TabPanel>

      <TabPanel>
        <Back data={muscleData} />
      </TabPanel>

      <TabPanel>
        <Chest  data={muscleData} />
      </TabPanel>

      <TabPanel>
        <Legs data={muscleData} />
      </TabPanel>
    </Tabs>
    );
  }
  
  export default Bodyparts;