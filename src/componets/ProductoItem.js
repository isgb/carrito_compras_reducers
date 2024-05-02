import React from 'react'

export const ProductoItem = ({data, addToCart}) => {
    const {id,price,name} = data;
    
  return (
    <div>
        <h4>{name}</h4>
        <h5>{price}</h5>
        <button onClick={() => addToCart(id) }>Agregar</button>
    </div>
  )
}
