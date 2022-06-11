import React, { useRef, useState } from 'react';
import "./PostShare.css";
import profileImg from "../../img/profileImg.jpg";
import InsertPhotoTwoToneIcon from '@mui/icons-material/InsertPhotoTwoTone';
import VideocamTwoToneIcon from '@mui/icons-material/VideocamTwoTone';
import GpsFixedTwoToneIcon from '@mui/icons-material/GpsFixedTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import PunchClockTwoToneIcon from '@mui/icons-material/PunchClockTwoTone';



const PostShare = () => {

    const [image, setImage] = useState(null);

    const imageRef = useRef();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img)
            })
        }
    }
    return (
        <div className='post_share'>

            <img src={profileImg} alt="" />

            <div>

                <input type="text" name="" id="" placeholder="What's Happenning?" />

                <div className="post_options">
                    <div
                        className="option" style={{ color: "var(--photo)" }}
                        onClick={() => imageRef.current.click()}
                    >
                        <InsertPhotoTwoToneIcon />
                        Photo
                    </div>
                    <div className="option" style={{ color: "var(--video)" }}>
                        <VideocamTwoToneIcon />
                        Video
                    </div>
                    <div className="option" style={{ color: "var{--location)" }}>
                        <GpsFixedTwoToneIcon />
                        Location
                    </div>
                    <div className="option" style={{ color: "var(--shedule)" }}>
                        <CalendarMonthTwoToneIcon />
                        Schedule
                    </div>
                    <button className="button ps-button">Share</button>
                    <div style={{ display: "none" }}>
                        <input
                            type="file"
                            name="myImage"
                            ref={imageRef}
                            onChange={onImageChange}
                        />
                    </div>
                </div>

                {image && (
                    <div className="preview_image">
                        <PunchClockTwoToneIcon onClick={() => setImage(null)} />
                        <img src={image.image} alt="" />
                    </div>
                )}

            </div>
        </div>
    )
}

export default PostShare;