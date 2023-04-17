import React, { useContext } from 'react';
import Cusin from './Cusin';
import { MoneyContext } from './Grandpa';

const Uncle = () => {
    const [money,setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h3>uncle page</h3>
            <p><small>grandpa money: {money}</small></p>
            <button onClick={() =>setMoney(money + 1000)}>send 1000k euro</button>
            <section className='flex'>
                <Cusin>nabil</Cusin>
                <Cusin>nabila</Cusin>
            </section>
        </div>
    );
};

export default Uncle;