import React, { useContext } from 'react';
import { RingContext } from './Grandpa';

const Special = ({ring}) => {
    const angti = useContext(RingContext)
    return (
        <div>
            <h2>special page</h2>
            <p><small>Ring: {angti}</small></p>

        </div>
    );
};

export default Special;