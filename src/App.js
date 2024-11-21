import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Middle/Main/Home';
import Cart from './Components/Middle/SUB/Cart.jsx';
import FruitsComponent from './Components/Middle/SUB/FruitsComponent.jsx';
import MeatComponent from './Components/Middle/SUB/MeatComponent.jsx';
import VegetablesComponent from './Components/Middle/SUB/VegetablesComponent.jsx';
import AboutUs from './Components/NavBAr/About/About';
import LoginForm from './Components/NavBAr/Authenticate/LoginForm.jsx';
import SignupForm from './Components/NavBAr/Authenticate/SignupForm.jsx';
import ContactUs from './Components/NavBAr/Contact/ContactUs';
import { AuthProvider } from './Context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/fruits" element={<FruitsComponent />} />
                        <Route path="/meat" element={<MeatComponent />} />
                        <Route path="/veg" element={<VegetablesComponent />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/signup" element={<SignupForm />} />
                        <Route path="/login" element={<LoginForm />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
