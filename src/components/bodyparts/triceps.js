import React from "react";
import MuscleGroupImage from "../MuscleGroupImage.tsx";

function Triceps(){
    return(
        <div className="muscleimg">
            <MuscleGroupImage muscleGroups={["triceps"]} />
        </div>
    )
}

export default Triceps