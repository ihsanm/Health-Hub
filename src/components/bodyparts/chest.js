import React from "react";
import MuscleGroupImage from "../MuscleGroupImage.tsx";

function Chest(){
    return(
        <div className="muscleimg">
            <MuscleGroupImage muscleGroups={["chest"]} />
        </div>
    )
}

export default Chest