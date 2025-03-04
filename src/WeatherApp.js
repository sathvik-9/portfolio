import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import weather_back from './weather_back.jpg'

const WeatherApp = () => {
    const[city, setCity] = useState("");
    const[weather, setWeather] = useState({});
    const api ={
      key : "f18e02de5e2f16f1de36e4d1b75c03e8",
    }
  return (
    <div>
      <div className="navbar" >
        <h1>Weather App</h1>
        <Link to='/' style={{textDecoration: "none"}}>Back to Home</Link>
      </div>
      <div className="card App-header" style={{alignItems:"center", justifyContent:"center", display:"flex", flexDirection:"column", padding:"80px", backgroundImage: {weather_back}}}>
          <input type="text" placeholder="Enter city" onChange={(e) => setCity(e.target.value)}></input>
          <br/>
          <button onClick={async () => {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api.key}`)
            const response = await data.json()
            setWeather(response)
            console.log(response)
          }}>Get weather</button><br/>
          <p>Scroll down for weather in {city}</p>
      </div>
      <div className="card" style={{alignItems:"center", justifyContent:"center", display:"flex", flexDirection:"column", color:"white", backgroundColor:"blue", padding:"60px"}}>
        <h2>{weather.name}</h2><br/>
        <h3>{weather.weather?.[0].description}</h3><br/>
        <h3>{weather.main?.temp} &#176;F</h3>
      </div>
    </div>
  )
}

export default WeatherApp
