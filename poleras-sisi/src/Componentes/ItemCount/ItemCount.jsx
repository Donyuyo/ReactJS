import React, { useEffect, useState } from "react";

const ItemCount = ({ initial = 0, stock = 10, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const increase = () => {
    setCount((prevCount) => Math.min(prevCount + 1, stock));
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial, stock]);

  return (
    <div className="counter">
      <button disabled={count <= 1} onClick={decrease} className="btn btn-outline-secondary">
        -
      </button>
      <span className="mx-2">{count}</span>
      <button disabled={count >= stock} onClick={increase} className="btn btn-outline-secondary">
        +
      </button>
      <div className="mt-2">
        <button disabled={stock <= 0} onClick={() => onAdd(count)} className="btn btn-primary">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;



