import React from 'react';
import './Main.css';

function WhyChooseUs() {
    return (
        <>
        <div style={{ display: 'flex', backgroundColor: 'rgb(241, 241, 241)' }}>
            <img
                className="img-responsive"
                src="/Images/women.jpg"
                alt=""
                width="620"
                height="715"
                style={{ marginLeft: '90px' }}
            />
            <div>
                <h1 style={{ marginTop: '40px', marginLeft: '190px' }}>Why Choose Us</h1>
                <div className="choose-container-1">
                    <p
                        style={{ color: 'black' }}
                        className="text-content"
                    >
                        <h1>100% Fresh Organic Foods</h1>
                    </p>
                    <p>
                        This is our motto and we are experts in delivering the
                        <br />
                        best 100% organic foods on the market. We work with
                        <br />
                        more than 60 farms all over the country.
                    </p>
                </div>
                <div className="choose-container-2">
                    <p
                        style={{ color: 'black' }}
                        className="text-content"
                    >
                        <h1>Fast Free Delivery</h1>
                    </p>
                    <p>
                        We have developed an effective and fast delivery
                        <br />
                        network which brings the products to your home or
                        <br />
                        office in 48 hours.
                    </p>
                </div>
                <div className="choose-container-2">
                    <p
                        style={{ color: 'black' }}
                        className="text-content"
                    >
                        <h1>Rich Experience</h1>
                    </p>
                    <p>
                        We are working with organic products for 14 years and
                        <br />
                        to be honest this is the best job ever – to see the
                        <br />
                        people’s smiles when they taste our fresh food!
                    </p>
                </div>
            </div>
            
        </div>


        <div class="Organic">
            <img src="/Images/Natural.png"/>
            <img src="/Images/1.png"/>
            <img src="/Images/100.png"/>
            <img src="/Images/organic.png"/>
            <img src="/Images/4.png"/>
        </div>

        </>
    );
}

export default WhyChooseUs;
