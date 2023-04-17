import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h2>friend page</h2>
            {ring && <p><small>Ring: Diomond</small></p>}
        </div>
    );
};

export default Friend;