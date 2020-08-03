import React from "react";
import logo from "../logo.svg"

const Header =()=>{
    return(
        <nav className="Nav">
            <div className="Nav-menus">
                <div>
                    <img src={logo} className="Nav-brand-logo" alt="logo"/>
                        Instagram
                </div>
            </div>
        </nav>
    )
};

export default Header;