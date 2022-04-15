import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header>
        <div className="container">
            <div className="navbar">
                <div className="logo">
                   <a href='index.html'><img src="images/Home/dgtglogo.png" width="84px" height="46px" alt='' /></a>
                </div>
                <div className="toggle" onclick="togglemenu();"></div>
                <ul className="menu">
                    <li>
                        <Link to="Home.js" className="active" onclick="togglemenu();">Home</Link>
                    </li>
                    <li>
                        <a href="services.html" onclick="togglemenu();">Services</a>
                    </li>
                    <li>
                        <a href="ourteam.html" onclick="togglemenu();">Our Team</a>
                    </li>
                    <li>
                        <Link to="Aboutus.js" onclick="togglemenu();">About Us</Link>
                    </li>
                    <li>
                        <a href="ourwork.html" onclick="togglemenu();">Our Work</a>
                    </li>
                    <li>
                        <a href="career.html" onclick="togglemenu();">Career</a>
                    </li>
                    <li>
                        <a href="blog.html" onclick="togglemenu();">Blogs</a>
                    </li>
                    <li>
                        <a href="contactus.html" className="active-bg" onclick="togglemenu();">Contact Us</a>
                    </li>
                </ul>
            </div>

        </div>
    </header>
  )
  
}
