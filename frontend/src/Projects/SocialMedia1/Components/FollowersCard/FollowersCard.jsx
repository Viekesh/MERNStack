import React from 'react';
import "./FollowersCard.css";
import Followers from "../../Data/FollowersData";

const FollowersCard = () => {
    return (
        <div className="followers_card">
            <h3>Who is following you?</h3>

            {Followers.map((follower) => {
                return (
                    <div className="follower" key={follower.id}>
                        <div>
                            <img src={follower.img} alt="" className='follower_img' />
                            <div className="name">
                                <span>{follower.name}</span>
                                <span>{follower.username}</span>
                            </div>
                        </div>
                        <button className='button fc_button'>Follow</button>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard;