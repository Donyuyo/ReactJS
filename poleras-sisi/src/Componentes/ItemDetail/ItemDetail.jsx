import React from 'react';

const ItemDetail = ({ item }) => {
    return (
    <div className='row'>
        <div className='col-md-4 offset-md-4'>
        <img src={item.imagen} className='img-fluid' alt={item.nombre} />
        <h3>{item.nombre}</h3>
        <p>$ {item.precio}</p>
        <p>{item.color}</p>
        <p>{item.tallas}</p>
        <p>Cantidad: {item.stock}</p>
        </div>
    </div>
    );
};

export default ItemDetail;
