import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/monogram-logo.svg'
import "../../styles/components/Navbar.css"


const Navbar = () => {

    let links = [
        { name: "ABOUT", link: "/about" },
        { name: "PROJECT", link: "/" },
        { name: "CONTACTS", link: "/" },
    ];

    return(
        <div className="nav-main-frame">
            <img src={Logo}
                 alt={Logo}
                 className="logo-image"/>
            <div className="nav-links-frame">

                <ul className="nav-link">
                    {links.map((link) => (
                        <li key={link.name} className="nav-link-detail">
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;