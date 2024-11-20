import React, { useState } from "react";
import './Main.css';
import ProductCard from './ProductCard'; // Import the ProductCard component

const FeaturedProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("Fruits");

  // Sample data for each category
  const meatItems = [
    { name: "Pork Chops", price: "Rs. 100.00/Kg", img: "/Images/Meat1.png" },
    { name: "Beef Fillet", price: "Rs. 100.00/Kg", img: "/Images/Meat2.png" },
    { name: "Beef Steaks", price: "Rs. 100.00/Kg", img: "/Images/Meat3.png" },
    { name: "Pork Bacon", price: "Rs. 100.00/Kg", img: "/Images/meat4.png" },
  ];

  const vegetableItems = [
    { name: "Tomato", price: "Rs. 100.00/Kg", img: "/Images/tomato.jpg" },
    { name: "Beet Root", price: "Rs. 100.00/Kg", img: "/Images/Bit root.jpg" },
    { name: "Cabbage", price: "Rs. 100.00/Kg", img: "/Images/cabage.jpg" },
    { name: "Brinjal", price: "Rs. 100.00/Kg", img: "/Images/brinjal.jpg" },
  ];

  const fruitItems = [
    { name: "Banana", price: "Rs. 100.00/Kg", img: "/Images/Banana.jpg" },
    { name: "Kiwi", price: "Rs. 100.00/Kg", img: "/Images/kiwi.jpg" },
    { name: "Strawberry", price: "Rs. 100.00/Kg", img: "/Images/straeberry.jpg" },
    { name: "Orange", price: "Rs. 100.00/Kg", img: "/Images/Orange.jpg" },
  ];

  // Reusable function to render the appropriate category
  const renderCategory = (items) => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {items.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    );
  };

  // Function to select the category to render
  const getCategoryItems = () => {
    switch (selectedCategory) {
      case "Vegetables":
        return renderCategory(vegetableItems);
      case "Meat":
        return renderCategory(meatItems);
      case "Fruits":
      default:
        return renderCategory(fruitItems);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>Featured Products</h1>
      <div>
        <ul className="bottom-menu" style={{ display: "flex", marginLeft: "400px" }}>
          <li>
            <button type="button" onClick={() => setSelectedCategory("Vegetables")}>
              Vegetables
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setSelectedCategory("Meat")}>
              Meat
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setSelectedCategory("Fruits")}>
              Fruits
            </button>
          </li>
        </ul>
      </div>

      {/* Render the selected category */}
      <div className="category-section">{getCategoryItems()}</div>
    </div>
  );
};

export default FeaturedProducts;
