import React from 'react'

const CardItem = ({data, deleteFromCart}) => {
    const {id,name, price, quantity} = data;
  return (
    <div>
        <h1>{name}</h1>
        <h5>${price}.00 x {quantity} = ${price * quantity}.00</h5>
        <button onClick={() => deleteFromCart(id)}>Eliminar Uno</button>
        <br/>
        <button onClick={() => deleteFromCart(id,true)}>Eliminar todos</button>
        <br/><br/>
    </div>
  )
}

export default CardItem;