import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className='container'>
            <div className='nav'>
                <div className='nav-left'>
                    <div>
                        <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="img" />
                    </div>
                    <div>
                        <h1>Course</h1>
                    </div>
                </div>
                <div className='nav-list'>
                    <ul>
                        <NavLink to="/"><li>Home</li></NavLink>
                        <NavLink to="/add"><li>Add</li></NavLink>
                        <NavLink to="/courses"><li>Courses</li></NavLink>
                        <NavLink to="/elements"><li>Elements</li></NavLink>
                        <NavLink to="/news"><li>News</li></NavLink>
                        <NavLink to="/contact"><li>Contact</li></NavLink>
                    </ul>
                </div>
                <div className='nav-right'>
                    <div>
                    <i class="fa-solid fa-phone-volume"></i>
                    <span>
                        +43 4566 7788 2457</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
