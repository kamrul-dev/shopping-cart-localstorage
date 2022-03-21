import React from 'react';
import { add, division, multiply, sub } from '../Utilities/Calculation';

const Calculation = () => {

    // addition result
    const addResult = add(3, 5);

    // subtraction resul
    const subResult = sub(20, 10);

    // Multiplication Result
    const multResult = multiply(2, 3);

    // Division Result
    const divResult = division(50, 10);

    return (
        <div>
            <h1>Some Basic Calculation Practice</h1>
            <h3>Addtion Result: {addResult} </h3>
            <h3>Subtraction Result: {subResult}</h3>
            <h3>Multiplication Result: {multResult}</h3>
            <h3>Division Result: {divResult}</h3>
        </div>
    );
};

export default Calculation;