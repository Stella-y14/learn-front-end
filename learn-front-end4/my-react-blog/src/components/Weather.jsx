import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios' //need to be installed. npm i axios
import './Weather.css'

const Weather = () => {
  //store weather data
  const[data, setData] = useState({})
  const[location, setLocation] = useState('')

  //to have default location of weather
  useEffect(() => {
    const fetchDefaultLocation = async () => {
      const defaultLocation = "Seoul"
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=2df0b4fcdfcb4524b5599c8541488793`
      
      const response = await axios.get(url) //http response
      setData(response.data)
    }
    fetchDefaultLocation()
  }, [])

  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=2df0b4fcdfcb4524b5599c8541488793`
    
    //try catch if the data is not found
    try {
      const response = await axios.get(url) //http response
      if (response.data.cod !== 200) {
        setData({notFound: true})
      } else {
          setData(response.data)
          setLocation('') //reset the location after the search is complete
      }
    } catch (error) {
      if(error.response && error.response.status == 404) {
        setData({notFound: true})
      } else {
        console.error("An unexpexted error occurred", error)
      }
    }
    console.log(data)
  }

  const handleInputChange = (e) => {
    setLocation(e.target.value) //whenever user puts value, it takes it then set location
  }

  //function dynamic Icons
  const getWeatherIcon = (weatherType) => {
    switch(weatherType) {
      case "Clear":
        return <i className='bx bxs-sun'></i>
      case "Clouds":
        return <i className='bx bxs-cloud'></i>
      case "Rain":
        return <i className='bx bxs-cloud-rain'></i>
      case "Thunderstorm":
        return <i className='bx bxs-cloud-lightning'></i>
      case "Snow":
        return <i className='bx bxs-cloud-snow'></i>
      case "Haze":
      case "Mist":
        return <i className='bx bxs-cloud'></i>
      default:
        return <i className='bx bxs-cloud'></i>
    }
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
      {data.notFound ? (<div className='not-found'>Not Found</div>) : (
        <div className="weather-data">
        {data.weather && data.weather[0] && getWeatherIcon(data.weather[0].main)}
            {/* accessing weather properties */}
        <div className="weather-type">{data.weather ? data.weather[0].main : null}</div> 
        <div className="temp">{data.main ? `${Math.floor(data.main.temp)}º` : null}</div>
      </div>
      )}
    </div>
  )
}

export default Weather 