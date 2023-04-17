import React from 'react';
import Brother from './Brother';
import Myself from './Myself';
import Sister from './Sister';

const Father = ({ring}) => {
    return (
        <div>
            <h2>father page</h2>
            <section className='flex'>
                <Myself ring ={ring}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;