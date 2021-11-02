import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carosel.css';

const Carosel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className="carosel_img">
                        <img
                        className="d-block w-100"
                        src="https://programmingtask.000webhostapp.com/p-hero/full-stack/normal/bd1.jpg"
                        alt="First slide"
                        />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Bangladesh is full of natural beauty. Rivers, coasts and beaches, archaeological sites, religious places, hills, forests, waterfalls, tea gardens surround it.</p>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carosel_img">
                        <img
                        className="d-block w-100"
                        src="https://programmingtask.000webhostapp.com/p-hero/full-stack/normal/bd2.jpg"
                        alt="Second slide"
                        />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>The Sundarban, Historic Mosque in city of Bagerhat, Ruins of the Buddihist Vihara at Paharpur are the three world heritage sites in Bangladesh among 1007.</p>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carosel_img">
                        <img
                        className="d-block w-100"
                        src="https://programmingtask.000webhostapp.com/p-hero/full-stack/normal/bd3.png"
                        alt="Third slide"
                        />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>To observe the beauty of nature, huge amount of domestic and foreign tourists visit the country and its tourist attraction sites. In 2012, around six-lakh (6 hundred thousand) tourists came Bangladesh to visit and enjoy its beauty.</p>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carosel_img">
                        <img
                        className="d-block w-100"
                        src="https://programmingtask.000webhostapp.com/p-hero/full-stack/normal/bd4.jpg"
                        alt="First slide"
                        />
                    <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>The weather in Bangladesh is very nice and makes it a favorable destination for tourists from around the world.</p>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carosel;