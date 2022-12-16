import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./landing_page.css"

 
export default function LandingPage() {
  const navigate = useNavigate();

  return (
  <>
    <div className='landing-main-container'>
      <span className='landing-img'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQv2JqufLZq1s2XxLjj5mwr_alJrBi5grwCQ&usqp=CAU' alt='img' />
      </span>

      <span className='landing-btn'>
          <h1>10X TEAM</h1> <br/>
          <button onClick={() => navigate('postviews')}>Click</button> 
      </span>
    </div>
  </>
  )
}
