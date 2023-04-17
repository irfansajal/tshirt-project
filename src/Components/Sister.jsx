import React, { useContext } from 'react';
import { MoneyContext } from './Grandpa';

const Sister = () => {
    const [money,setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>sister page</h2>
            <p><small>grandpa money: {money}</small></p>
        </div>
    );
};

export default Sister;