import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <p>No hay elementos en el carrito</p>
        <Link to="/" className="btn btn-primary">
          Hacer compras
        </Link>
      </div>
    );
  }

  return (
    <div className="text-center">
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Total: $ {cart.reduce((total, product) => total + product.quantity * product.price, 0)}</p>
      <Link to="/checkout">
        <button className="btn btn-success">Finalizar Compra</button>
      </Link>
    </div>
  );
};

export default Cart;

