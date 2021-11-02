import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './AdminPanale.css'

const AdminPanale = () => {
    const [allldata, setAlldata] = useState([])

    useEffect(()=>{
        fetch('https://wicked-vault-61711.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setAlldata(data))
    },[])

    return (
        <div>
            <div className="admin_dashbord_main">
                <br />
                <br />
                <div className="admin_dashbord">
                    <h1>Admin Dashbord</h1>
                    <h6>Find all your users bellow....</h6>
                    {
                        allldata.map(res => <h1>{res.user}</h1>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminPanale;