import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([])
    console.log(cosmetics)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data));
    }, []);
    return (
        <div>
            <h1>Welcome to Cosmetics Shop</h1>
            <div className='products'>
                {
                    cosmetics.map(cosmetic => <Cosmetic
                        key={cosmetic.id}
                        cosmetic={cosmetic}
                    ></Cosmetic>)
                }
            </div>
        </div>
    );
};

export default Cosmetics;