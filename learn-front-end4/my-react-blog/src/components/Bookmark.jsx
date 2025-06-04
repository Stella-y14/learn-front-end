import React from 'react'
import './Modal.css'
import demoImg from '../assets/images/test2.png'

const Bookmark = () => {
  return (
    <div className='modal-overlay'>
        <div className="modal-content">
            <span className="close-button">
                <i className="fa-solid fa-xmark"></i>
            </span>
            <h2 className="bookmarks-heading">Bookmarked News</h2>
            <div className="bookmarks-list">
                <div className="bookmark-item">
                    <img src={demoImg} alt="Bookmark Image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bookmark