import React, { useState } from 'react'
import Weather from './Weather'
import Calendar from './Calendar'
import './News.css'
import userImg from '../assets/images/test1.png'
import techImg from '../assets/images/test2.png'
import NewsModal from './NewsModal'

const News = () => {
    const [showModal, setShowModal] = useState(false)
    const [selectedArticle, setSeletedArticle] = useState(null)

    const handleArticle = (article) => {
        setSeletedArticle(article)
        setShowModal(true)
    }
  return (
    <div className='news'>
        <header className='news-header'>
            <h1 className="logo">News & Blogs</h1>
            <div className="search-bar">
                <form>
                    <input type="text"  placeholder='Search' />
                    <button type='submit'>
                        <i className='fa-solid fa-magnifying-glass'></i>
                    </button>
                </form>
            </div>
        </header>
        <div className="news-content">
            <div className='navbar'>
                <div className='user'>
                    <img src={userImg} alt="User Image" />
                    <p>Mary's Blog</p>
                </div>
                <nav className="categories">
                    <h1 className="nav-heading">Categories</h1>
                    <div className="nav-links">
                        <a href="#" className='nav-link'>General</a>
                        <a href="#" className='nav-link'>World</a>
                        <a href="#" className='nav-link'>Business</a>
                        <a href="#" className='nav-link'>Technology</a>
                        <a href="#" className='nav-link'>Entertainment</a>
                        <a href="#" className='nav-link'>Sports</a>
                        <a href="#" className='nav-link'>Science</a>
                        <a href="#" className='nav-link'>Health</a>
                        <a href="#" className='nav-link'>Nation</a>
                        <a href="#" className='nav-link'>Bookmarks <i className="fa-regular fa-bookmark"></i></a>
                    </div>
                </nav>
            </div>
            <div className="news-section">
                <div className="headline">
                    <img src={techImg} alt="Headline Image" />
                    <h2 className="headline-title">Lorem ipsum dolor sit amet. <i className="fa-regular fa-bookmark bookmark"></i></h2>
                </div>
                <div className="news-grid">
                    <div className="news-grid-item">
                        <img src={techImg} alt="News Image" />
                        <h3>Lorem ipsum dolor sit amet. <i className="fa-regular fa-bookmark bookmark"></i></h3>
                    </div>
                    <div className="news-grid-item">
                        <img src={techImg} alt="News Image" />
                        <h3>Lorem ipsum dolor sit amet. <i className="fa-regular fa-bookmark bookmark"></i></h3>
                    </div>
                    <div className="news-grid-item">
                        <img src={techImg} alt="News Image" />
                        <h3>Lorem ipsum dolor sit amet. <i className="fa-regular fa-bookmark bookmark"></i></h3>
                    </div>
                    <div className="news-grid-item">
                        <img src={techImg} alt="News Image" />
                        <h3>Lorem ipsum dolor sit amet. <i className="fa-regular fa-bookmark bookmark"></i></h3>
                    </div>
                    <div className="news-grid-item">
                        <img src={techImg} alt="News Image" />
                        <h3>Lorem ipsum dolor sit amet. <i className="fa-regular fa-bookmark bookmark"></i></h3>
                    </div>
                    <div className="news-grid-item">
                        <img src={techImg} alt="News Image" />
                        <h3>Lorem ipsum dolor sit amet. <i className="fa-regular fa-bookmark bookmark"></i></h3>
                    </div>
                </div>
            </div>
            <NewsModal 
            show={showModal} 
            article={selectedArticle} 
            onClose={() => setShowModal(false)} />
            <div className="my-blogs">My blogs</div>
            <div className="weather-calendar">
                <Weather/>
                <Calendar/>
            </div>
        </div>
        <footer className="news-footer">Footer</footer>
    </div>
  )
}

export default News