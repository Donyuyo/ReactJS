import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import arrayProductos from '../Json/arrayProductos.json';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
    const fetchData = async () => {
        try {
        const data = await new Promise((resolve) => {
            setTimeout(() => {
            const productoEncontrado = arrayProductos.productos.find((item) => item.id === parseInt(id));
            resolve(productoEncontrado);
            }, 800);
        });
        setItem(data);
        } catch (error) {
        console.log('Error:', error);
        }
    };
    fetchData();
    }, [id]);

    return (
    <div className='container'>
        <div className='row'>
        <ItemDetail item={item} />
        </div>
    </div>
    );
};

export default ItemDetailContainer;
