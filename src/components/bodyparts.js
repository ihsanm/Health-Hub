import React, { useState } from "react";
import Back from "./bodyparts/back";
import Biceps from "./bodyparts/biceps";

function Bodyparts() {

    const [activeTab, setActiveTab] = useState("tab1")

    
  const handleTab1 = () => {
    
    setActiveTab("tab1");
  };
  const handleTab2 = () => {

    setActiveTab("tab2");
  };

    return (
      <div className="muscle-tabs">

        <ul className="nav">
        <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Biceps</li>
        <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Back</li>
      </ul>

      <div className="outlet">
      {activeTab === "tab1" ? <Biceps /> : <Back />}
      </div>
      </div>
    );
  }
  
  export default Bodyparts;