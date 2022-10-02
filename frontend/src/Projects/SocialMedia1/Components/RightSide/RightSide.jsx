import React, { useState } from 'react';
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Com from "../../img/comment.png";
import SettingsIcon from '@mui/icons-material/Settings';
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';



const RightSide = () => {

    const [modalOpened, setModalOpened] = useState();

    return (
        <div className='right_side'>
            <div className="nav_icons">
                <img src={Home} alt="" />
                <SettingsIcon />
                <img src={Noti} alt="" />
                <img src={Com} alt="" />
            </div>

            <TrendCard />

            <button className="button r-button" onClick={() => setModalOpened(true)}>
                Share
            </button>

            <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        </div>
    )
}

export default RightSide;