import './Header.css';
import Logo from '../../Components/images/Logo.svg';
const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/order">Order</a>
                <a href="/shop">Shop</a>
                <a href="/login">Login</a>
            </div>

        </div>
    );
};

export default Header;