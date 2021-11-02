import React from 'react';
import './Option.css';
import { Button } from 'react-bootstrap';

const Option = (props) => {
    const {location, img, place, minidesc, _id} = props.options;

    const orderKeyhandler = (index) => {
        const keys = localStorage.getItem("keys")
        const keyArrey = keys.split(",");
        const productKey = keyArrey[index];
        const url = `https://wicked-vault-61711.herokuapp.com/orders${productKey}`;
        fetch(url, {
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                 alert('Delete Sucessfully');
            }
        })
    }




    return (
        <div className="option_holder">
            <div className="option_container">
                <div>
                    <img className="option_img_div" src={img} alt="" />
                </div>
                <div className="option_text">
                    <h3>{place}</h3>
                    <h6>{location}</h6>
                    <p>{minidesc}</p>
                    <Button onClick={()=>orderKeyhandler(props.index)}>Cancel Plane</Button>
                </div>
            </div>
        </div>
    );
};

export default Option;