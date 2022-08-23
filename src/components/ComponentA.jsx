import React from 'react';
import { Contact } from '../models/contact.class';
import ComponentB from './ComponentB';


const ComponentA = () => {
    const defaultcontact=new Contact('Aftab Ali','Akmal','josesebastiancu@gmail.com',false);
    return (
        <div>
            <ComponentB contact={defaultcontact}></ComponentB>
        </div>
    );
};


export default ComponentA;
