import React from 'react';
import './Packages.css';
import Cards from '../Cards/Cards';
import AddPackages from '../AddPackages/AddPackages';
import { useEffect } from 'react';
import { useState } from 'react';

const Packages = () => {
    const [packages, setPackages] = useState([])

    useEffect(()=> {
        fetch('https://wicked-vault-61711.herokuapp.com/packages')
        .then(res => res.json())
        .then(packages => setPackages(packages))
    },[])

    console.log(packages);
    return (
        <>
            <h1>pakages</h1>
            <div className="cards_holder">
                {
                    packages.map(data => <Cards key={data._id} packagedata={data}></Cards>)
                }
            </div>
            <br />
        </>
    );
};

export default Packages;