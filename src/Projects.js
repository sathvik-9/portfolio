import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div>
        <h1 className="navbar pageChange">Projects</h1>
        <Link to='/weatherapp'><button className="btn btn-success" style={{marginBottom: "20px"}}>Weather App</button></Link> 
        <br/>
        <Link to='/calculator'><button className="btn btn-success">Calculator App</button></Link>
    </div>
  )
}

export default Projects
