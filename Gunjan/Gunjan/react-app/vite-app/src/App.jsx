import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [uName, setUName] = useState("");
  const [uEmail, setUEmail] = useState("");
  const [uCity, setUCity] = useState("");

  return (
    <>
       <div>
      <h1>My Profile</h1>

      <div>
        <div className="form-element">
          <p>Name -{uName}</p>
          <input type="text" onChange={(e) => setUName(e.target.value)} />
        </div>
        <div className="form-element">
          <p>Your Gender:</p>
          <input type="radio" name='gender'  onChange={(e) => (e.target.value)}/>
          <label>Male</label>
          <input type="radio" name='gender'  onChange={(e) => setUEmail(e.target.value)}/>
          <label>Female</label>
        </div>
        <div className="form-element">
          <p>City - {uCity}</p>
          <input
            type="radio"
            value={uCity}
            onChange={(e) => setUCity(e.target.value)}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
