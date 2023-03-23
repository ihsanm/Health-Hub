import React from "react";
import MuscleGroupImage from "../MuscleGroupImage.tsx";

function Back(){
    return(
        <div >
            <MuscleGroupImage className="muscleimg" muscleGroups={["back"]} />
        </div>
    )
}

export default Back