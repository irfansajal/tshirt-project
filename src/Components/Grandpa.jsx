import React, { createContext, useState } from 'react';
import Anty from './Anty';
import Father from './Father';
import Uncle from './Uncle';
import './Grandpa.css'

export const RingContext = createContext('gold')
export const MoneyContext = createContext(5);

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(5);



    return (
        <div className='grandpa'>
            <h2>Grandpa page</h2>
            <p>Has Money: {money}</p>
            <MoneyContext.Provider value={[money,setMoney ]}>
                <RingContext.Provider value='golden ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Anty ring={ring}></Anty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/* 
1.create a context
2.create a provider and pass a value
3.use useContext to receive
 */