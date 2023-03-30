import React from 'react';
import Label from '../Label';

const Input = ({ id, value }) => (
    <>
        <input id={id} type="checkbox" value={value} />
        <Label htmlFor={id} content="Mostrar eventos" />
    </>
);

export default Input;