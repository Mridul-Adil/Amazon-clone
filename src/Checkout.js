import React from 'react';
import "./Checkout.css"
import Subtotal from "./Subtotal.js";
import Checkoutproduct from './Checkoutproduct.js';
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{ cart, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">

                <a href="https://www.primevideo.com/detail/amzn1.dv.gti.04b8a852-452a-30e7-42ca-8ed69c777ba1">
                <img className="checkout__ad"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" />
                </a>

                <div className="checkout__username">
                    <h5>{user ? 'Hello, '+user.email: ' '}</h5>
                </div>

                <div>
                    <h1 className="checkout__title">Shopping Cart</h1>
                                {cart.map(item => (
                                    <Checkoutproduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                    />
                             ))}
                    {/*items */}
                    {/*items */}
                </div>

            </div>
            
            <div className="checkout__right">
                <img className="checkout__rightad"
                 src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"/>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
