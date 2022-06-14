import React, { useState } from "react";
import "./InfoCard.css";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ProfileModal from "../ProfileModal/ProfileModal";

const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false);

    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
                <div>
                    <FolderOpenIcon
                        width="2rem"
                        height="1.2rem"
                        onClick={() => setModalOpened(true)}
                    />
                    <ProfileModal
                        modalOpened={modalOpened}
                        setModalOpened={setModalOpened}
                    />
                </div>
            </div>

            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>Working On Projects</span>
            </div>

            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>Nagpur, Maharashtra</span>
            </div>

            <div className="info">
                <span>
                    <b>Works As A </b>
                </span>
                <span>Freelancer</span>
            </div>

            <button className="button logout-button">Logout</button>
        </div>
    );
};

export default InfoCard;