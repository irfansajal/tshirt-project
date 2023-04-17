import React from 'react';
import Friend from './Friend';

const Cusin = ({ children, hasFriend ,ring}) => {
    return (
        <div>
            <h2>cusin page</h2>
            <p><small>{children}</small></p>
            { hasFriend &&<Friend ring ={ring}></Friend>}

        </div>
    );
};

export default Cusin;