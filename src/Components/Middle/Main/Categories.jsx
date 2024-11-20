import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

function Categories() {
    return (
        <div>
            <div style={{ marginTop: '48px' }}>
                <h1 style={{ fontSize: '50px', textAlign: 'center', margin: '0px' }}>Popular Categories</h1>
                <p style={{ color: 'green', textAlign: 'center', margin: '0px', fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif' }}>
                    _____</p>
            </div>
            <div className="Categories">
                <Link to="veg">
                    <div className="Categories-1">
                        <h2 style={{ marginLeft: '20px' }}>Vegetables</h2>
                    </div>
                    <img src="/Images/veg1.png" alt="Vegetables" className="absolute1" />
                </Link>
                <Link to="meat">
                    <div className="Categories-2">
                        <h2>Meat</h2>
                    </div>
                    <img src="/Images/Meat.png" alt="Meat" className="absolute2" />
                </Link>
                <Link to="fruits">
                    <div className="Categories-3">
                        <h2>Fruits</h2>
                    </div>
                    <img src="/Images/Fru1.png" alt="Fruits" className="absolute3" />
                </Link>
            </div>
        </div>
    );
}

export default Categories;
