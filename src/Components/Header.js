import React from 'react';

export default function Header(){
    return(
        <nav>
        <div className="logo">Mobile.Net</div>
        <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact Us</li>
        </ul>
        <div className="search">
        <i className="fa fa-search"></i>
        <i className="fa fa-shopping-basket"></i>
        </div>
        </nav>
    )
}