import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar(){
    return <div>
        <ul>
            <Link to='/Home'>
            <li>Home</li>
            </Link>
            <Link to='/Contact'>
            <li>Contact us</li>
            </Link>
            <Link to='/Service'>
            <li>Services</li>
            </Link>
        </ul>
    </div>
} 
export default Navbar