import React from 'react';
import Cusin from './Cusin';

const Anty = ({ring}) => {
    return (
        <div>
            <h2>Anty page</h2>
            <section className='flex'>
                <Cusin>beingi</Cusin>
                <Cusin hasFriend={true} ring ={ring}>kalu</Cusin>
            </section>
        </div>
    );
};

export default Anty;