import React from 'react';

function ProductRow(props) {
    const name = props.name;
    const price = props.price;
    const stocked = props.stocked;

    const textColor = !stocked ? 'red' : 'black';

    return (
        <>
            <div className="col">
                <p style={{color: textColor}}>{name}</p>
            </div>
            <div className="col">
                <p style={{color: textColor}}>{price}</p>
            </div>
        </>
    )
}

export { ProductRow };