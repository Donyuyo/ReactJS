import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import arrayProductos from '../Json/arrayProductos.json';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
    const fetchData = async () => {
        try {
        const data = await new Promise((resolve) => {
            setTimeout(() => {
            const filteredItems = id
                ? arrayProductos.productos.filter((item) => item.tipo === id)
                : arrayProductos.productos;

            resolve(filteredItems);
            }, 1500);
        });
        setItems(data);
        } catch (error) {
        console.log('Error:', error);
        }
    };
    fetchData();
    }, [id]);

    return (
    <div className='container'>
        <div className='row'>
        <ItemList items={items} />
        </div>
    </div>
    );
};

export default ItemListContainer;
