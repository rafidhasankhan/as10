import React from 'react';
import { useParams } from 'react-router-dom';
import './PlaceOrder.css';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import Option from '../Option/Option';
import useLocalstorage from '../hooks/useLocalstorage';
import useAuth from '../hooks/useAuth';

const PlaceOrder = () => {
    const [keys, setKeys] = useState([])
    const [cart, setCart] = useState([])
    const [orderdata, setOrderdata] = useState([])
    const [usersarrey, setUsersarrey] = useState([])
    const {loadData} = useLocalstorage()
    const cart_data = loadData()
    const [localcart, setLocalcart] = useState(cart_data)
    const {packageid} = useParams();
    let [index, setIndex] = useState(0)

    const { user } = useAuth() 
    const emailsearch = user.email;
    console.log(emailsearch)


    useEffect(()=>{
        fetch('https://wicked-vault-61711.herokuapp.com/orders')
        .then(res => res.json())
        .then(placedOrder =>{
            placedOrder.map(res => {
                setKeys(keys => [...keys, res.order]);
                setUsersarrey(usersarrey => [...usersarrey, res.user]);
                setOrderdata(placedOrder)
            })
        })
    },[])


    useEffect(() => {
        console.log("search hit");
        fetch('https://wicked-vault-61711.herokuapp.com/packages/search',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
        .then(res => res.json())
        .then(data => setCart(data))
    }, [keys])

    const handlePlaceOrder = () => {
        const keys = localStorage.getItem("keys")
        const keyArrey = keys.split(",");
        const finding = keyArrey.find(res => res.includes(packageid))
        const userEmail = user.email;

        if(!finding){
            const orderid = {"order":packageid, "user": userEmail}
            fetch('https://wicked-vault-61711.herokuapp.com/orders', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderid)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                     alert('New Record Added');
                }
            })
        } else {
            for(let i = 0; i < orderdata.length; i++){
                const { order } = orderdata[i];
                console.log(order)
                if(finding === order){
                    const store = usersarrey[i];
                    const currentuser = user.email;
                    console.log("Matched at :", i, 'and email : ', usersarrey[i])
                    console.log("Login user :", user.email)
                    if(store !== currentuser){
                        console.log("Can be inserted")
                        const orderid = {"order":packageid, "user": userEmail}
                        fetch('https://wicked-vault-61711.herokuapp.com/orders', {
                            method:'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(orderid)
                        })
                        .then(res => res.json())
                        .then(data => {
                            if(data.insertedId){
                                 alert('New Record Added');
                            }
                        })
                    }
                } else {
                    alert("Already Exist In Your List")
                }
            }
        }

    }
    

    if(keys){
       localStorage.setItem("keys", keys); 
    }

    console.log(usersarrey);
    console.log(orderdata);

    return (
        <div>
            <br />
            <br />
                <div className="order_cart d-flex">
                    <br />
                    <div>
                        <img className="cart_img" src={localcart.img} alt="" />
                    </div>
                    <div className="cart_text">
                        <h1>{localcart.place}</h1>
                        <h3>{localcart.location}</h3>
                        <p>{localcart.minidesc}</p>
                        <Button onClick={handlePlaceOrder}> Place Order </Button>
                    </div>
                </div>
            <br />
            <br />
            <h1>Your Total Plan {cart.length}</h1>
            {
                  cart.map(data => <Option key={index} index={index++} options={data}></Option>)
            }
        </div>
    );
};

export default PlaceOrder;