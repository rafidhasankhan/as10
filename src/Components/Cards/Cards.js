import React from 'react';
import { Button } from 'react-bootstrap';
import './Cards.css';
import { Link } from 'react-router-dom';
import useLocalstorage from '../hooks/useLocalstorage';
import Rating from 'react-rating';

const Cards = (props) => {
    const {place, cost, img, location, ratings, minidesc, _id, key} = props.packagedata;
    const {setLocaldata} = useLocalstorage();

    return (
        <div className="custome_card">
            <div className="custome_card_sub">
                <img className="card_img" src={img} alt="" />
                <p className="cards_margin">Total Rating (4.5)</p>
                <div className="icon_holder">
                <Rating
                    initialRating={ratings}
                    fullSymbol="fas fa-star"
                    emptySymbol="far fa-star"
                    readonly></Rating>
                </div>
                <h4>{cost}</h4>
            </div>
            <div className="custome_card_sub">
                <h3>{place}</h3>
                <p className="cart_para">{minidesc}</p>
                <h6>Location : {location}</h6>
                <Link onClick={() => {setLocaldata(props.packagedata)}} to={`/place-order/${key}`}><Button>Booking Order</Button></Link>
            </div>
        </div>
    );
};

export default Cards;