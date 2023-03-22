import React from "react";
import MuscleGroupImage from "./MuscleGroupImage.tsx";
function Bodyparts() {

    // window.location.reload();


    return (
      <div>
        <p>hello world</p>
        
        
        <MuscleGroupImage muscleGroups={["chest","biceps"]}/>
      </div>
    );
  }
  
  export default Bodyparts;