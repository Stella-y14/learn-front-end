import React from 'react'
import demoImg from '../assets/images/test2.png'
import './NewsModal.css'
import './Modal.css'

const NewsModal = ({show, article, onClose}) => {
    if (!show) {
        return null
    }
    return (
        <div className='modal-overlay'>
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </span>
                <img src={demoImg} alt="Modal Image" className='modal-image' />
                <h2 className="modal-title">Lorem, ipsum dolor.</h2>
                <p className="modal-source">Source: The School</p>
                <p className="modal-date">Jun 24, 2025, 04:14</p>
                <p className="modal-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, itaque!</p>
                <a href="#" className="read-more-link">Readmore</a>
            </div>
        </div>
    )
}

export default NewsModal