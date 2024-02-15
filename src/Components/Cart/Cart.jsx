import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart }) => {
    console.log(cart)

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
        console.log(total)
    }
    const tax = total * 3 / 100;
    const totalGrand = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${totalGrand.toFixed(2)}</h5>
            <button className='clear-btn'>Clear Cart <FontAwesomeIcon icon={faTrash} /></button>
            <button className='review-btn'>Review Order <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
        </div>
    );
};

export default Cart;