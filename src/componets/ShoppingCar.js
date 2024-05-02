import React, { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from './actions/shoppingAction';
import { ProductoItem } from './ProductoItem';

const ShoppingCar = () => {

    const [state,dispatch] = useReducer(shoppingReducer,shoppingInitialState);

    const [products, cart] = state;

    const addToCart = (id) => {
        console.log(id)
    }

    const deleteFromCart = () => {
        
    }

    const clearCart = () => {

    }


  return (
    <div>
        <h2>Carrito de compras</h2>
        <h3>Productos</h3>
        <article className='box grid-responsive'>
            {
                products.map((product) => (
                    <ProductoItem
                        key={product.id}
                        data={data}
                        addToCart={addToCart}

                    />
                ))
            }
        </article>
        <h3>Carrito</h3>
        <article className='box'></article>
    </div>
  )
}

export default ShoppingCar;