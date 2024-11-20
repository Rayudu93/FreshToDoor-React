    import React from "react";

    const ProductCard = ({ item }) => {
    return (
        <div className="Fruits-top1" style={{ margin: "20px", textAlign: "center" }}>
        <img src={item.img} alt={item.name} width="250px" height="200px" style={{ marginTop: "45px" }} />
        
        <ul className="Fruits-top-1" style={{ listStyleType: "none", padding: 0, display: "flex", justifyContent: "center", gap: "5px" }}>
            <li><i className="bi bi-star-fill"></i></li>
            <li><i className="bi bi-star-fill"></i></li>
            <li><i className="bi bi-star-fill"></i></li>
            <li><i className="bi bi-star-fill"></i></li>
            <li><i className="bi bi-star-half"></i></li>
        </ul>

        <h2>{item.name}</h2>
        <h3 style={{ textAlign: "center" }}>{item.price}</h3>
        
        <a style={{ textDecoration: "none" }}>
            <p style={{ padding: "10px 10px 10px 10px", fontSize: "16px", display: "inline-block", borderRadius: "5px", color: "#000" }}>
            <i className="bi bi-cart3"></i> ADD TO CART
            </p>
        </a>
        </div>
    );
    };

    export default ProductCard;
