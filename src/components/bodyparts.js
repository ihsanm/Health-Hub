import React, { useState, useEffect } from "react";
import Back from "./bodyparts/back";
import Biceps from "./bodyparts/biceps";
import Triceps from "./bodyparts/triceps";
import Chest from "./bodyparts/chest";
import Legs from "./bodyparts/legs";
import {Tab, TabList, Tabs, TabPanel} from "react-tabs"

function Bodyparts() {

  const [muscle, setMuscle] = useState("biceps")
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
    .then(response => console.log(response))
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
        <Biceps />
      </TabPanel>

      <TabPanel>
        <Triceps />
      </TabPanel>

      <TabPanel>
        <Back />
      </TabPanel>

      <TabPanel>
        <Chest />
      </TabPanel>

      <TabPanel>
        <Legs />
      </TabPanel>
    </Tabs>
    );
  }
  
  export default Bodyparts;