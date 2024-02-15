
import './Products.css'
const Products = (props) => {
    const { name, id, img, price, seller, ratings, quantity } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div>
                <h6>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'>Manufacturer: {seller}</p>
                <p className='product-ratting'>Ratting: {ratings} star</p>
            </div>
            <button className='cart-btn'> Add to Cart</button>

        </div>
    );
};

export default Products;