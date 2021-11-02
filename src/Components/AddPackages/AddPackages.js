import React from 'react';
import { useRef } from 'react';

const AddPackages = () => {
    const placeRef = useRef();
    const locationRef = useRef();
    const desRef = useRef();
    const ratingsRef = useRef();
    const imgRef = useRef();
    const costRef = useRef();
    const minidescRef = useRef();
    const keyRef = useRef();

    const formHandler = e => {
        const place = placeRef.current.value;
        const location = locationRef.current.value;
        const des = desRef.current.location;
        const ratings = ratingsRef.current.value;
        const img = imgRef.current.value;
        const cost = costRef.current.value;
        const minidesc = minidescRef.current.value;
        const key = keyRef.current.value;

        const newPackages = {place, location, des, ratings, img, cost, minidesc, key}
        console.log(newPackages);

        fetch('https://wicked-vault-61711.herokuapp.com/packages', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPackages)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                 alert('New Record Added');
            }
        })
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={formHandler}>
                <input type="text" ref={placeRef} placeholder="place"/><br />
                <input type="text" ref={locationRef} placeholder="location"/><br />
                <input type="text" ref={desRef} placeholder="description" /><br />
                <input type="number" ref={ratingsRef} placeholder="ratings" /><br />
                <input type="text" ref={imgRef} placeholder="img url" /><br />
                <input type="number" ref={costRef} placeholder="cost" /><br />
                <input type="text" ref={minidescRef} placeholder="mini description" /><br />
                <input type="text" ref={keyRef} placeholder="key" /><br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddPackages;