import React from 'react'
import { Link } from 'react-router-dom'

const CalculatorApp = () => {
  return (
    <div>
      <div className="navbar">
        <h1>Calculator</h1>
        <Link to='/' style={{textDecoration: "none"}}>Back to Home</Link>
      </div>
      <div className="App-header">
        <p>This is a calculator App.</p>
      </div>
    </div>
  )
}

export default CalculatorApp
