import React from "react";
import "./App.css";
import Lead from "./sections/Lead";
import Reason from "./sections/Reason";
import ReasonsData from "./assets/ReasonsData.json";

function App() {
  return (
    <div className="App">
      <Lead />
      {ReasonsData.map((item: any, index: any) => {
        return <Reason data={item} />;
      })}
    </div>
  );
}

export default App;
