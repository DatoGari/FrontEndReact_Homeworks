import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav className="main_menu">
          <a href="">Home</a>
          <a href="">About Me</a>
          <a href="">My Projects</a>
          <a href="">Contact</a>
        </nav>
      </header>

      <div id='header-text'>
           <h1>My Profile</h1>
      </div>

      <div id='my-profile'>
        <div id='image'>
          <img src="src/assets/865A0225_1.jpg" alt="My Portrait" />
        </div>
        <div id='text'>
          <h2>Development Program Specialist</h2>
          <p>Over the course of my 25+ years of service with USAID, I have developed a comprehensive skill set,
             with expertise in program budgeting, financial analysis, and reporting. I have demonstrated resilience 
             and perseverance in the face of challenging situations, which has contributed significantly to my personal 
             and professional growth.
          </p>
          <p>
            Throughout my career at USAID, I have consistently managed the Mission’s program budget, ensuring its effective 
            planning and monitoring. I have developed and implemented efficient systems and tools for resource planning, 
            tracking fund commitments and obligations, which has ensured that all Mission programs received timely and adequate 
            funding.
          </p>
        </div>
      </div>

      {/* <div> */}
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      {/* </div> */}
      {/* <h1>Vite + React</h1> */}
      {/* <div className="card"> */}
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      {/* </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}   

export default App
