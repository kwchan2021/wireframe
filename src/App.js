import './App.scss'; // Change to './App.sass'
import Table from './components/Table';
import { data } from './data';
import React, { useState,useEffect, useCallback } from "react";
import TabPanel from './components/TabPanel';
import TopPanel from './components/TopPanel';
import MiddlePanel from './components/MiddlePanel';

function App() {
  const [activeTab, setActiveTab] = useState("Alarms")
  const handleActiveTabChange = (tabName) => {
    setActiveTab(tabName)
  }

  // Handle Check Box
  const [checkedBoxes, setCheckedBoxes] = useState(new Set())

  const handleCheckboxChange = useCallback((uuid) => {
    setCheckedBoxes(prevCheckboxes => {
      const wasChecked = prevCheckboxes.has(uuid);
      const newCheckedBoxes = new Set(prevCheckboxes);
      if(wasChecked) {
          newCheckedBoxes.delete(uuid);
      } else {
          newCheckedBoxes.add(uuid);
      }
      return newCheckedBoxes
    });
  }, [])

  useEffect(() => {
      setCheckedBoxes(new Set());
  }, [activeTab]);

  //onShowMenu={() => console.log("Hello")}
  return (
    <div className="App">

      <TopPanel checkedNo={checkedBoxes.size}/>

      <MiddlePanel />

      <TabPanel 
        onActiveTabChange={ handleActiveTabChange }
      />

      <Table 
        items={data.items}
        activeTab={activeTab}
        checkedBoxes={checkedBoxes}
        onCheckboxChange={handleCheckboxChange}
      />

    </div>
  );
}

export default App;
