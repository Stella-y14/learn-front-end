import React, { useEffect, useRef, useState } from 'react'
import './Calendar.css'

const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const monthsOfYear = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"]
  const currentDate = new Date()

  const [currentMonth, setCurrentMonth] = useState (currentDate.getMonth())

  const [currentYear, setCurrentYear] = useState (currentDate.getFullYear())

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  //sun is index[0]
  const firstDayOfMonth = new Date(currentYear ,currentMonth, 1).getDay()

  console.log(currentMonth, currentYear, daysInMonth, firstDayOfMonth)//currentMonth index starts from 0, so it is 5 if it is june

  return (
    <div className='calendar'>
      <div className="navigate-date">
        <h2 className="month">{monthsOfYear[currentMonth]},</h2>
        <h2 className="year">{currentYear}</h2>
        <div className="buttons">
          <i className="bx bx-chevron-left"></i>
          <i className="bx bx-chevron-right"></i>
        </div>
      </div>
      <div className="weekdays">
        {daysOfWeek.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="days">
        {[...Array(firstDayOfMonth).keys()].map((_, index) => (
          <span key={`empty-${index}`}></span>
        ))}
        {[...Array(daysInMonth).keys()].map((day) => (
          <span key={day+1}>{day+1}</span>
        ))}
      </div>
    </div>
  )
}

export default Calendar