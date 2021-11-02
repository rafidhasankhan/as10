import React from 'react';
import './Tourplan.css'
import AddPackages from '../Components/AddPackages/AddPackages'

const Tourplan = () => {
    return (
        <div className="make_plan_main">
            <br />
            <h1 className="tour_h1">Make Your Treap With Us</h1>
            <AddPackages></AddPackages>
        </div>
    );
};

export default Tourplan;