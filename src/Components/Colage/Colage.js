import React from 'react';
import './Colage.css';

const Colage = () => {
    return (
        <div>
            <br />
            <br />
            <h1>Go Exotic Places</h1>
            <br />
            <p>When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinations or vibrant landscapes, we have offers for you.</p>
            <br />
            <div>
                <div className="grid_colage">
                    <div className="colage_column">
                        <br />
                        <img className="colage_img" src="https://programmingtask.000webhostapp.com/p-hero/full-stack/normal/col-img/col-1.jpg" alt="" />
                        <img className="colage_img" src="https://programmingtask.000webhostapp.com/p-hero/full-stack/normal/col-img/col-2.jpg" alt="" />
                        <img className="colage_img" src="https://programmingtask.000webhostapp.com/p-hero/full-stack/normal/col-img/col-3.jpeg" alt="" />
                        <img className="colage_img" src="https://programmingtask.000webhostapp.com/p-hero/full-stack/normal/col-img/col-4.jpg" alt="" />
                        <img className="colage_img" src="https://programmingtask.000webhostapp.com/p-hero/full-stack/normal/col-img/col-5.jpg" alt="" />
                    </div>
                    <div className="colage_column colage_extra">
                        <img className="colage_img" src="https://programmingtask.000webhostapp.com/p-hero/full-stack/normal/col-img/col-6.jpeg" alt="" />
                        <img className="colage_img" src="https://programmingtask.000webhostapp.com/p-hero/full-stack/normal/col-img/col-7.jpg" alt="" />
                        <img className="colage_img" src="https://programmingtask.000webhostapp.com/p-hero/full-stack/normal/col-img/col-8.jpg" alt="" />
                        <img className="colage_img" src="https://programmingtask.000webhostapp.com/p-hero/full-stack/normal/col-img/col-9.jpg" alt="" />
                    </div>
                    <div className="colage_column">
                        <br />
                        <img className="colage_img" src="https://programmingtask.000webhostapp.com/p-hero/full-stack/normal/col-img/col-10.jpg" alt="" />
                        <img className="colage_img" src="https://programmingtask.000webhostapp.com/p-hero/full-stack/normal/col-img/col-11.jpg" alt="" />
                        <img className="colage_img" src="https://programmingtask.000webhostapp.com/p-hero/full-stack/normal/col-img/col-12.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Colage;