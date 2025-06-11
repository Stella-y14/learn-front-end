import React, { useEffect, useState } from 'react'
import Weather from './Weather'
import Calendar from './Calendar'
import './News.css'
import userImg from '../assets/images/test1.png'
import techImg from '../assets/images/test2.png'
import NewsModal from './NewsModal'
import Bookmark from './Bookmark'

const News = ({onShowBlogs}) => {
    useEffect(() => {
        const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || []
        setBookmarks(savedBookmarks)
    })

    const articles = [
        { id: 1, title: "Article 1", description: "Description 1", image: techImg },
        { id: 2, title: "Article 2", description: "Description 2", image: techImg },
        { id: 3, title: "Article 3", description: "Description 3", image: techImg },
        { id: 4, title: "Article 4", description: "Description 4", image: techImg },
        { id: 5, title: "Article 5", description: "Description 5", image: techImg },
        { id: 6, title: "Article 6", description: "Description 6", image: techImg },
    ]

    const headline = {
        id: 0,
        title: "Main Headline",
        description: "This is the main headline content",
        image: techImg
    };

    const [showModal, setShowModal] = useState(false)
    const [selectedArticle, setSeletedArticle] = useState(null)

    const [bookmarks, setBookmarks] = useState([])
    const [showBookmarksModal, setShowBookmarksModal] = useState(false)

    const handleArticleClick = (article) => {
        setSeletedArticle(article)
        setShowModal(true)
    }

    const handleBookmarkClick = (article) => {
        setBookmarks((prevBookmarks) => {
            const updatedBookmarks = prevBookmarks.find((bookmark) => bookmark.title === article.title) ?
            prevBookmarks.filter((bookmark) => bookmark.title !== article.title) : [...prevBookmarks, article]
            localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks))
            return updatedBookmarks
        })
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
                <div className='user' onClick={onShowBlogs}>
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
                        <a href="#" className='nav-link' onClick={() => 
                            setShowBookmarksModal(true)
                        }>
                            Bookmarks <i className="fa-solid fa-bookmark"></i></a>
                    </div>
                </nav>
            </div>
            <div className="news-section">
                <div className="headline" onClick={() => handleArticleClick(headline)}>
                    <img src={headline.image} alt="Headline Image" />
                    <h2 className="headline-title">
                        {headline.title} <i 
                            className={`${
                            bookmarks.some((bookmark) => 
                            bookmark.title === headline.title) 
                            ? "fa-solid" 
                            : "fa-regular"
                            } fa-regular fa-bookmark bookmark`} onClick={(e) =>
                                {
                                   e.stopPropagation()
                                   handleBookmarkClick(headline) 
                                }
                            }
                            ></i>
                    </h2>
                </div>
                <div className="news-grid">
                    {articles.map((article) => (
                    <div
                        key={article.id}
                        className="news-grid-item"
                        onClick={() => handleArticleClick(article)}
                    >
                        <img src={article.image} alt="News Image" />
                        <h3>
                        {article.title} <i 
                            className={`${
                            bookmarks.some((bookmark) => 
                            bookmark.title === article.title) 
                            ? "fa-solid" 
                            : "fa-regular"
                            } fa-regular fa-bookmark bookmark`} onClick={(e) =>
                                {
                                   e.stopPropagation()
                                   handleBookmarkClick(article) 
                                }
                            }
                            ></i>
                        </h3>
                    </div>
                    ))}
                </div>
            </div>
            <NewsModal 
            show={showModal} 
            article={selectedArticle} 
            onClose={() => setShowModal(false)} />
            <Bookmark
            show={showBookmarksModal}
            bookmarks={bookmarks}
            onClose={() => setShowBookmarksModal(false)}
            onSelectArticle={handleArticleClick}
            onDeleteBookmark={handleBookmarkClick}
            />
            <div className="my-blogs">My blogs</div>
            <div className="weather-calendar">
                <Weather/>
                <Calendar/>
            </div>
        </div>
        <footer className="news-footer">
            <p><span>News & Blogs App</span></p>
            <p>&copy; Stella</p>
        </footer>
    </div>
  )
}

export default News