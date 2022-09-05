import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__link">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Постики</Link>
            </div>
        </div>
    );
};

export default Navbar;