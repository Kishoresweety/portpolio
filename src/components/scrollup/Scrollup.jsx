import React from 'react'
import "./scrollup.css"

const Scrollup = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector (".scrollup");
                        // When Scroll is higher then 560 view-port
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll")
    })
  return (
        <a href="#" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}

export default Scrollup