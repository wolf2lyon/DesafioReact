import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';


const ComponentB = ({contact}) => {
    
    
    return (
    <div>
        <h1>Nombre:{contact.Name}</h1>
        <h1>Apellido:{contact.LastName}</h1>
        <h2>Email:{contact.EmailContact}</h2>
        <h5>
            {contact.Conect ? 'Contacto En Línea': 'Contacto No Disponible'}
        </h5>
    </div>
    );
};


ComponentB.propTypes = {
    contact:PropTypes.instanceOf(Contact)
};


export default ComponentB;
