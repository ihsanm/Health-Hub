import React from "react";
import MuscleGroupImage from "./MuscleGroupImage.tsx";
function Bodyparts() {

    return (
      <div>
        <p>hello world</p>
        <MuscleGroupImage muscleGroups={["biceps", "triceps", "hamstring"]}/>
      </div>
    );
  }
  
  export default Bodyparts;