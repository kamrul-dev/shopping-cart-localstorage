import React from 'react';
import { addToDb } from '../Utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id);
    }
    return (
        <div className='product'>
            <h3>name: {name}</h3>
            <h4>Price: {price}</h4>
            <p>It has id: {id}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;