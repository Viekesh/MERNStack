import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "./LogoSearch.css";
import Logo from "../../img/logo.png";

const LogoSearch = () => {
    return (
        <div className='logo_search'>
            <img src={Logo} alt="" />
            <div className="search">
                <input type="text" placeholder='Explore' />
                <div className="s-icon">
                    <SearchIcon />
                </div>
            </div>
        </div>
    )
}

export default LogoSearch;