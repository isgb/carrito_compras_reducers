import React, { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from './reducers/shoppingReducer';
import { ProductoItem } from './ProductoItem';
import CardItem from './CardItem';
import { TYPES } from './actions/shoppingAction';

const ShoppingCar = () => {

    const [state,dispatch] = useReducer(shoppingReducer,shoppingInitialState);

    const [products, cart] = state;

    const addToCart = (id) => {
        console.log(id)
        dispatch({type: TYPES.ADD_TO_CART,payload: id})
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
        <article className='box'>
            <button onClick={clearCart}>Limpiar Carrito</button>
            {
                cart.map((item, index) => <CardItem key={index} data={item} deleteFromCart={deleteFromCart}/>)
            }
        </article>
    </div>
  )
}

export default ShoppingCar;