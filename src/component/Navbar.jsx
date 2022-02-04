import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='main_nav'>
            <div className="container">
                    <div className="top_nav_div d-flex justify-content-between py-4">
                        <div className="logo">
                            <img src="images/75.png" alt="logo" />
                        </div>
                        <div className="right_icons d-flex justify-content-between">
                            <i class="fas fa-search"></i>
                            <i class="fas fa-user-alt"></i>
                            <i class="fas fa-shopping-bag"></i>
                        </div>
                    </div>
                </div>
                <div className="nav_botom">
                    <ul>
                        <li><NavLink to='/'>Home <i class="fas fa-chevron-down"></i></NavLink>
                        <ul>
                            <li><Link to='/'>Home 1</Link></li>
                            <li><Link to='/page2'>Home 2</Link></li>
                        </ul>
                        </li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/">Home Furniture <i class="fas fa-chevron-down"></i></NavLink>
                        <ul>
                            <li><Link to="/bedroom">Bedroom</Link></li>
                            <li><Link to="/dining">Dining</Link></li>
                            <li><Link to="/living">Living</Link></li>
                        </ul>
                        </li>
                        <li><NavLink to="/">Office Furniture <i class="fas fa-chevron-down"></i></NavLink>
                        <ul>
                            <li><Link to="/launge">Lounge</Link></li>
                            <li><Link to="/officechair">Office Chair</Link></li>
                            <li><Link to="/officetable">Office table</Link></li>
                        </ul>
                        </li>
                        <li><NavLink to="/">Hospital Furniture <i class="fas fa-chevron-down"></i></NavLink>
                        <ul>
                            <li><Link to="/hospitalutility">Hospital Bed</Link></li>
                            <li><Link to="/utility">Hospital Utility</Link></li>
                        </ul>
                        </li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="bar_div">
                    <i class="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

