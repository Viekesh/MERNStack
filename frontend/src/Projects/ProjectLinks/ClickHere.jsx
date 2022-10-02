import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import SMRoutes from '../SocialMedia1/SMRoutes';
// import LandingPage from "../SocialMedia1/LandingPage";

const ClickHere = () => {
  return (
    <>
    <Routes>
      <Route exact path='/SMRoutes' element={<SMRoutes />}></Route>
    </Routes>
    <div>
        <NavLink to="/SMRoutes">Social Media 1</NavLink>
    </div>
    </>
  )
}

export default ClickHere;