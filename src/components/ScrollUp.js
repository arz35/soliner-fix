import React from 'react'
import { useState, useEffect } from "react";

const ScrollUp = () => {

  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
    setVisible(true)
    }
    else if (scrolled <= 300){
    setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
      in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  

  return (
    <div className='scroll-button'>
      <button>
          <i class="fa-solid fa-angle-up" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}></i>
      </button>
    </div>
  )
}

export default ScrollUp