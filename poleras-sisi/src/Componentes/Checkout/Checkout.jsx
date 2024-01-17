import React, { useState } from 'react';
import { useCartContext } from '../Context/CartContext';
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';

const CheckOut = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmacion, setEmailConfirmacion] = useState('');
  const [error, setError] = useState('');
  const [ordenId, setOrdenId] = useState('');

  const { cart, totalPrice, removeProduct, clearCart } = useCartContext();

  const manejadorFormulario = async (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError('Por favor complete todos los campos requeridos');
      return;
    }

    if (email !== emailConfirmacion) {
      setError('Los email no coinciden');
      return;
    }

    try {
      const total = totalPrice();
      const orden = {
        items: cart.map((producto) => ({
          id: producto.id,
          nombre: producto.title,
          cantidad: producto.quantity,
        })),
        total: total,
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        email,
      };

      await Promise.all(
        orden.items.map(async (productoOrden) => {
          const db = getFirestore();
          const productoRef = doc(db, 'products', productoOrden.id);

          const productoDoc = await getDoc(productoRef);
          const stockActual = productoDoc.data().stock;

          await updateDoc(productoRef, {
            stock: stockActual - productoOrden.cantidad,
          });
        })
      );

      const db = getFirestore();
      const docRef = await addDoc(collection(db, 'orders'), orden);

      setOrdenId(docRef.id);
      removeProduct();
      clearCart();
    } catch (error) {
      console.error('Error al procesar la orden', error);
      setError('Error en la orden');
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Complete el formulario para confirmar la compra</h2>
      <form onSubmit={manejadorFormulario}>
        {cart.map((producto) => (
          <div key={producto.id}>
            <p>
              {producto.nombre} - Cantidad: {producto.cantidad}
            </p>
            <p>Precio por unidad: {producto.price}</p>
          </div>
        ))}

        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Apellido:</label>
          <input
            type="text"
            className="form-control"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Telefono:</label>
          <input
            type="number"
            className="form-control"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirmar email:</label>
          <input
            type="email"
            className="form-control"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p className="text-danger text-center">{error}</p>}
        {ordenId && (
          <p className="text-success fs-4">
            ¡Gracias por tu compra! Tu número de seguimiento es: <br /> {''} {ordenId} {''} <br />
          </p>
        )}

        <div>
          <button type="submit" className="btn btn-primary text-center">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
