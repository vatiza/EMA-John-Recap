import { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(newCart)
    }



    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Products key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}

                    ></Products>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected Items{cart.length}</p>
            </div>

        </div>
    );
};

export default Shop;