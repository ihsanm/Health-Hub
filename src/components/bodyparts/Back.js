import React from "react";
import MuscleGroupImage from "../MuscleGroupImage.tsx";

function Back({ data }) {
  console.log(data);
  return (
    <div>
      <div className="muscleimg">
        <MuscleGroupImage muscleGroups={["back"]} />
      </div>
      <>
        {data.map((e) => {
          return (
            <div className="exercise-tabs">
             <p>{e.name}</p>
             </div>
             )
          
        })}
      </>
    </div>
  );
}

export default Back;
