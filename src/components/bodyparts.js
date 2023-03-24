import React from "react";
import Back from "./bodyparts/back";
import Biceps from "./bodyparts/biceps";
import Triceps from "./bodyparts/triceps";
import Chest from "./bodyparts/chest";
import Legs from "./bodyparts/legs";
import {Tab, TabList, Tabs, TabPanel} from "react-tabs"

function Bodyparts() {



    return (
      <Tabs className="muscle-tabs">
      <TabList className="tabs">
        <Tab className="tabs-item">Biceps</Tab>
        <Tab className="tabs-item">Triceps</Tab>
        <Tab className="tabs-item">Back</Tab>
        <Tab className="tabs-item">Chest</Tab>
        <Tab className="tabs-item">Legs</Tab>
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