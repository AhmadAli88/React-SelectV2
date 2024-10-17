// App.js
import React from "react";
import CountrySelect from "./components/CountrySelect";
import PhoneInputComponent from "./components/CountrySlelectWithFlag";

function App() {
  return (
    <div className="App">
      <h1 style={{ paddingLeft: "70px" }}>Country Select with Flags</h1>
      <div style={{ paddingLeft: "70px" }}>
        <CountrySelect />
        <PhoneInputComponent />
      </div>
    </div>
  );
}

export default App;
