import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(item, quantity);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4">
          <img src={item.img} className="img-fluid" alt={item.title} />
        </div>
        <div className="col-md-4">
          <h3>{item.title}</h3>
          <p className="font-italic">Descripción: {item.description}</p>
          <p className="font-weight-bold">Precio: $ {item.price}</p>
          <p className="text-muted">Cantidad: {item.stock}</p>
        </div>
        <div className="col-md-4">
          {goToCart ? (
            <Link to="/cart" className="btn btn-primary btn-lg">
              Terminar Compra
            </Link>
          ) : (
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
