import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    return (
        <div className='product'>
            <h3>name: {name}</h3>
            <h4>Price: {price}</h4>
            <p>It has id: {id}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;