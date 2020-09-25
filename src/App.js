import React, { useState } from "react";
import "./App.css";
import CreateSurvey from "./components/CreateSurvey";
import TakeSurvey from "./components/TakeSurvey";
import Landing from "./components/Landing";

function App() {
  const [flag, setFlag] = useState(0);
  const update = (value) => {
    setFlag(value);
  };
  return (
    <div className='App'>
      <div>
        {flag === 0 && <Landing update={update} />}
        {flag === 2 && <CreateSurvey />}
        {flag === 1 && <TakeSurvey />}
      </div>
    </div>
  );
}

export default App;
