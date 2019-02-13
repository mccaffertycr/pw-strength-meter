import React, { useState } from "react";
import PasswordStrengthMeter from "./pwStrengthMeter";
import "./App.css";

function App() {
  const [ password, setPassword ] = useState('');

  return (
    <div className="App">
      <div className="meter">
        <input
          className="password-input"
          autoComplete="off"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <PasswordStrengthMeter password={password} />
      </div>
    </div>
  );
}

export default App;
