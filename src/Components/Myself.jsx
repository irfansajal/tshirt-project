import React from 'react';
import Special from './Special';

const Myself = ({ring}) => {
    return (
        <div>
            <h2 >myself</h2>
            <Special ring={ring}></Special>
        </div>
    );
};

export default Myself;