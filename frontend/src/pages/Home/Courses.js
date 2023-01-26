import React from 'react'
import "./Home.scss"

const Courses = () => {
  return (
    <div className='second-sec'>
      <div className='courses_desc'>
          <h1>Popular Courses</h1>
      </div>
      {/* <div className='cards'> */}
        <div className='container'>
            <div className='first-card'>
             <div className='card_img'>
              <img src="https://preview.colorlib.com/theme/course/images/course_1.jpg"/>
            </div>
            <div className='card_name'>
              <h2>A complete guide to design</h2>
              <p>Adobe Guide, Layes, Smart Objects etc...</p>
            </div>
            <div className='card_bottom'>
                <div className='person_img'>
                    
                </div>
                <div className='person_name'>
                    <h3>Michael Smith, Author</h3>
                </div>
                <div className='price'>
                     $29
                </div>
            </div>
        </div>
        <div className='first-card'>
             <div className='card_img'>
              <img src="https://preview.colorlib.com/theme/course/images/course_1.jpg"/>
            </div>
            <div className='card_name'>
              <h2>A complete guide to design</h2>
              <p>Adobe Guide, Layes, Smart Objects etc...</p>
            </div>
            <div className='card_bottom'>
                <div className='person_img'>
                    
                </div>
                <div className='person_name'>
                    <h3>Michael Smith, Author</h3>
                </div>
                <div className='price'>
                     $29
                </div>
            </div>
        </div>
      </div>
     </div>
  )
}

export default Courses
