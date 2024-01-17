import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
import Card from 'react-bootstrap/Card';

const Item = ({ item }) => {
  return (
    <Link to={'/item/' + item.id} className='text-decoration-none'>
      <div className='container'>
        <Card className='border-0 item-card'>
          <Card.Img variant='top' src={item.img} className='card-img-top' alt={item.title} />
          <Card.Body className='text-center'>
            <h5 className='card-title'>{item.title}</h5>
            <p className='card-text'>Precio: ${item.price}</p>
            <p className='card-text'>Stock: {item.stock}</p>
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
};

export default Item;
