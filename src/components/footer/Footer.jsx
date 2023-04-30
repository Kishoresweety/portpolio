import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Kishore</h1>
            <ul className="footer__list">
                 <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/kishore.kishor.984" className="footer__social-link" target='_blank'>
                <i className='bx bxl-facebook'></i>
                </a>

                <a href="https://www.instagram.com/kishore.ly/" className="footer__social-link" target='_blank'>
                <i className='bx bxl-instagram'></i>
                </a>

                <a href="https://twitter.com/Kishore_1017" className="footer__social-link" target='_blank'>
                <i className='bx bxl-twitter'></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; Kishore. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer