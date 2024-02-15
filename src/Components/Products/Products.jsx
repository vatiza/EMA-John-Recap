
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Products.css'
const Products = (props) => {
    const { name, id, img, price, seller, ratings, quantity, shipping } = props.product;

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className="product">
            <img src={img} alt="" />
            <div>
                <h6>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'>Manufacturer: {seller}</p>
                <p className='product-ratting'>Ratting: {ratings} star</p>
            </div>

            <button onClick={() => { handleAddToCart(props.product) }} className='cart-btn' >
                Add to Cart
                < FontAwesomeIcon icon={faShoppingCart} />
            </button>

        </div>
    );
};

export default Products;