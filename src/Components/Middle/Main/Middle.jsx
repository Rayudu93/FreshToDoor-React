import './Main.css';

function MiddlePart(){
    return (
        <div className="main">
            <div>
                <p style={{ color: 'black' }}>
                    Bringing the Best<br />
                    to Your Home<br />
                    Delights.
                </p>
                <a href="#">
                    <h3>Order Now</h3>
                </a>
            </div>
            <div>
                {/* Self-closing <img /> tag */}
                <img src="/Images/man.png" alt="Man" />
            </div>
        </div>
    );
}

export default MiddlePart;
