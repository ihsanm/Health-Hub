import React from "react";
import MuscleGroupImage from "../MuscleGroupImage.tsx";

function Biceps(){
    return(
        <div className="muscleimg">
            <MuscleGroupImage muscleGroups={["biceps"]} />
        </div>
    )
}

export default Biceps