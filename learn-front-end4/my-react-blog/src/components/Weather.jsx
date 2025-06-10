import React, { useState } from 'react'
import axios from 'axios' //need to be installed. npm i axios
import './Weather.css'

const Weather = () => {
  //store weather data
  const[data, setData] = useState({})
  const[location, setLocation] = useState('')

  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=2df0b4fcdfcb4524b5599c8541488793`
    
    const response = await axios.get(url) //http response

    setData(response.data)
    setLocation('') //reset the location after the search is complete
    
    console.log(data)
  }

  const handleInputChange = (e) => {
    setLocation(e.target.value) //whenever user puts value, it takes it then set location
  }

  return (
    <div className='weather'>
      <div className="search">
        <div className="search-top">
          <i className="fa-solid fa-location-dot"></i>
          <div className="location">{data.name}</div>
        </div>
        <div className="search-location">
          <input 
            type="text" 
            placeholder='Enter Location' 
            value={location}
            onChange={handleInputChange} 
          />
          <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
        </div>
      </div>
      <div className="weather-data">
        <i className='bx bxs-sun' ></i> 
            {/* accessing weather properties */}
        <div className="weather-type">{data.weather ? data.weather[0].main : null}</div> 
        <div className="temp">28º</div>
      </div>
    </div>
  )
}

export default Weather 