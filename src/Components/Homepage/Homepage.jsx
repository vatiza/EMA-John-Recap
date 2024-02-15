import './Homepage.css';
import pic from '../images/austin-wade.png';
const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='body-title'>
                <p className='offer-text'>Sale up to 70% off</p>
                <h2>New Collection  For Fall</h2>
                <p className='intro-text'>Discover all the new arrivals of ready-to-wear collection.</p>
                <a href='#'><button>Shop Now</button></a>

            </div>
            <div className='body-pic'>
                <img className='' src={pic} alt="" />
            </div>

        </div>
    );
};

export default Homepage;