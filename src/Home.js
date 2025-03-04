import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="navbar" >
          <h1><Link to='/' style={{textDecoration: "none"}}>Logo</Link></h1>
          <ul style={{display: "flex", listStyleType: "none"}}>
              <li><Link to='/projects' style={{textDecoration: "none"}} className="objHover">Projects</Link></li>
              <li><Link to='/about' style={{textDecoration: "none"}} className="objHover">About</Link></li>
              
          </ul>
        </div>
        <div className="main">
            <h1>Home</h1>
            <p>Welcome to the home page</p>
        </div>
    </div>
  )
}

export default Home
