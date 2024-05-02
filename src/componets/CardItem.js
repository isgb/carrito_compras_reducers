import React from 'react'

const CardItem = ({data, deleteFromCart}) => {
    const {id,name, price} = data;
  return (
    <div>
        <h1>{id}</h1>
        <h5>${price}.00</h5>
        <button>Eliminar</button>
    </div>
  )
}

export default CardItem;