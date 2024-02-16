import { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    useEffect(() => {
        const storeCart = getShoppingCart();
        console.log(storeCart);
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);

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
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;