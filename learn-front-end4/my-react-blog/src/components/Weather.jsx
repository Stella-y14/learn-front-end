import React, { useState } from 'react'
import axios from 'axios' //need to be installed. npm i axios
import './Weather.css'

const Weather = () => {
  //store weather data
  const[data, setData] = useState({})

  const search = async () => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=2df0b4fcdfcb4524b5599c8541488793'
    
    const response = await axios.get(url) //http response
    
    console.log(response)
  }

  return (
    <div className='weather'>
      <div className="search">
        <div className="search-top">
          <i className="fa-solid fa-location-dot"></i>
          <div className="location">Tbilisi</div>
        </div>
        <div className="search-location">
          <input type="text" placeholder='Enter Location' />
          <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
        </div>
      </div>
      <div className="weather-data">
        <i className='bx bxs-sun' ></i> 
        <div className="weather-type">Clear</div>
        <div className="temp">28º</div>
      </div>
    </div>
  )
}

export default Weather 