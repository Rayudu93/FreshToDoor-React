// VegetablesComponent.js
import React, { useState } from 'react';
import { Veg as VegetablesData } from './Items'; // Adjust the import according to your file structure
import './Market.css';

function VegetablesComponent() {
    const [vegetablesData] = useState(VegetablesData);
    const [quantities, setQuantities] = useState(vegetablesData.map(() => 1)); // Initialize quantities for each vegetable

    const handleQuantityChange = (index, delta) => {
        setQuantities(prevQuantities => {
            const newQuantities = [...prevQuantities];
            const newQuantity = newQuantities[index] + delta;

            // Ensure the quantity stays within limits (1 to 10)
            if (newQuantity >= 1 && newQuantity <= 10) {
                newQuantities[index] = newQuantity;
            }

            return newQuantities;
        });
    };

    const addToCart = (name, price, img, quantity) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItem = cartItems.find(item => item.name === name);

        if (!existingItem) {
            const newItem = { name, price, img, quantity: parseInt(quantity) };
            cartItems.push(newItem);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            alert(`"${name}" has been added to your cart!`);
        } else {
            alert(`"${name}" is already in your cart.`);
        }
    };

    return (
        <div className="product-list">
            {vegetablesData.map((veg, index) => (
                <div key={index} className="edge-1">
                    <div className="veg-top-menu">
                        <img src={veg.image} alt={veg.name} />
                    </div>
                    <div className="veg-top-menu1">
                        <p className="organic-farm-text">Organic Farm</p>
                        <h2 className="product-title">{veg.name}</h2>
                        <p className="product-description">{veg.description}</p>
                        <p className="pricetag">₹ {veg.price}/Kg</p>
                        <div className="number-input-container">
                            <p>Quantity:</p>
                            <button className="quantity-btn reveal" onClick={() => handleQuantityChange(index, -1)}>&lt;</button>
                            <input
                                type="number"
                                className="quantity-btn1"
                                value={quantities[index]}
                                readOnly
                                min="1"
                                max="10"
                                style={{ margin: "0 10px 0 5px" }}
                            />
                            <button className="quantity-btn reveal1" onClick={() => handleQuantityChange(index, 1)}>&gt;</button>
                            <button
                                className="button-mem"
                                onClick={() => {
                                    addToCart(veg.name, veg.price, veg.image, quantities[index]);
                                }}
                            >
                                <p className="cart"><i className="bi bi-cart3"></i> ADD TO CART</p>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default VegetablesComponent;
