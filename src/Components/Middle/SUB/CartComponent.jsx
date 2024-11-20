import React, { useEffect, useState } from 'react';
import './Market.css'; // Create this file for styling if needed

const CartComponent = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Fetch cart items from localStorage on component mount
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const handleRemoveFromCart = (name) => {
        const updatedCartItems = cartItems.filter(item => item.name !== name);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const handleQuantityChange = (name, change) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.name === name) {
                const newQuantity = Math.max(1, Math.min(10, item.quantity + change));
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    // Calculate total and other fees
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const platformFee = 50;
    const deliveryFee = 30;
    const discount = 10;
    const finalTotal = total + platformFee + deliveryFee - discount;

    return (
        <div>
            <h1 style={{ textAlign: "center", paddingBottom: "30px" }}>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <h1 style={{ textAlign: "center"}}>Your cart is empty.</h1>
            ) : (
                <div style={{ display: "flex" }}>
                    <div>
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart-item" style={{ display: 'flex' }}>
                                <div className="veg-top-menu">
                                    <img src={item.img} alt={item.name} className="cart-item-img" width="200px" />
                                </div>
                                <div className="veg-top-menu1">
                                    <p style={{ margin: '0px', color: 'gray' }}>Organic Farm</p>
                                    <h2 style={{ margin: '10px 0px' }} className="cart-item-name">{item.name}</h2>
                                    <p style={{ fontSize: 'x-large' }} className="cart-item-price">Price: ₹ {item.price * item.quantity}</p>
                                    <div className="number-input-container">
                                        <p>Quantity:</p>
                                        {/* <button className="quantity-btn reveal" onClick={() => handleQuantityChange(item.name, -1)}>&lt;</button> */}
                                        <input
                                            type="number"
                                            className="quantity-btn1"
                                            value={item.quantity || 1}
                                            min="1"
                                            max="10"
                                            readOnly style={{ margin: "0 0 0 20px" }}
                                        />
                                        {/* <button className="quantity-btn reveal1" onClick={() => handleQuantityChange(item.name, 1)}>&gt;</button> */}
                                        <button onClick={() => handleRemoveFromCart(item.name)} className="remove-btn">Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <div className='Summary'>
                            <h1>Summary</h1>
                        </div>
                        <div className='terms'>
                            <p><span>Total</span><span style={{ marginLeft: "400px" }}>₹ {total}.00</span></p>
                            <p><span>Platform fee</span><span style={{ marginLeft: "353px" }}>₹ {platformFee}.00</span></p>
                            <p><span>Delivery fee</span><span style={{ marginLeft: "353px" }}>₹ {deliveryFee}.00</span></p>
                            <p><span>Discount</span><span style={{ marginLeft: "365px" }}>- ₹ {discount}.00</span></p>
                        </div>
                        <p className='final'><span>Final Total:</span><span style={{marginLeft:"320px"}}>₹ {finalTotal}.00</span></p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartComponent;
