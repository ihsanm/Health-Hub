import React from "react";
import MuscleGroupImage from "../MuscleGroupImage.tsx";

function Legs(){
    return(
        <div className="muscleimg">
            <MuscleGroupImage muscleGroups={["legs"]} />
        </div>
    )
}

export default Legs