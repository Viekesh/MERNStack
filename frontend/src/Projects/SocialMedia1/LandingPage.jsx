import React from 'react';
import "./Styles/LandingPage.css";
import Home from './Pages/Home/Home';
// import Auth from './Pages/Auth/Auth';
// import Profile from "./Pages/Profile/Profile";



const LandingPage = () => {
    return (
        <div className='landing_page'>
            <div className="blur" style={{ top: '-18%', right: '0' }}></div>
            <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
            <div className="blur" style={{ top: "80%", right: "15rem" }}></div>
            <Home />
            {/* <Auth /> */}
            {/* <Profile /> */}
        </div>
    )
}

export default LandingPage;