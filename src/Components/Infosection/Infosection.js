import React from 'react';
import './Infosection.css';

const Infosection = () => {
    return (
        <>
            <div className="info_main">
                <br />
                <br />
                <div className="info_flxer">
                    <div className="info_container">
                        <div className="info_img">
                            <img src="https://programmingtask.000webhostapp.com/p-hero/full-stack/normal/info.jpg" alt="" />
                        </div>
                    </div>
                    <div className="info_container">
                        <br />
                        <br />
                        <div className="info_text">
                            <h1> A Simply Perfect Place To Get Lost </h1>
                            <br />
                            <p>Treat yourself with a journey to your inner self. Visit a mystique Tibet and start your spiritual adventure. We promise, you’ll enjoy every step you make.</p>
                            <br />
                            <button className="info_button">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Infosection;