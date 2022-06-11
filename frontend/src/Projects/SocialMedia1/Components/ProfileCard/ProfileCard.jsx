import React from 'react';
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

const ProfileCard = () => {

    const ProfilePage = true;

    return (
        <div className='profile_card'>
            <div className="profile_images">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>

            <div className="profile_name">
                <span>Vikesh Gaikwad</span>
                <span>Full Stack Engineer</span>
            </div>

            <div className="follow_status">
                <hr />
                <div>
                    <div className="follow">
                        <span>999</span>
                        <span>Followings</span>
                    </div>

                    <div className="v1"></div>

                    <div className="follow">
                        <span>1</span>
                        <span>Followers</span>
                    </div>

                    {ProfilePage && (
                        <>
                            <div className="vl"></div>
                            <div className="follow">
                                <span>3</span>
                                <span>Posts</span>
                            </div>
                        </>
                    )}
                </div>
                <hr />
            </div>
            {ProfilePage ? "" : <span>My Profile</span>}
        </div>
    )
}

export default ProfileCard;