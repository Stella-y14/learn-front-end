import React from 'react'
import './Weather.css'

const Weather = () => {
  return (
    <div className='weather'>
      <div className="search">
        <div className="serach-top">
          <i className="fa-solid fa-location-dot"></i>
          <div className="location">Tbilisi</div>
        </div>
        <div className="search-location">
          <input type="text" placeholer='Enter Location' />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="weather-date">
        <i className='bx bxs-sun' ></i> 
      </div>
    </div>
  )
}

export default Weather