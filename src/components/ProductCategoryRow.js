import React from 'react';
import { ProductRow } from './ProductRow';

function FilterableCategoryRow(props) {
    return (
        <div className="container">
            <div className="row">
                <h3>{props.name}</h3>
            </div>
            <div>
                {props.productRows.map(productRow => {
                    return (
                        <div className="row" key={productRow.name}>
                            <ProductRow
                                name={productRow.name}
                                price={productRow.price}
                                stocked={productRow.stocked}
                            />
                        </div>
                    )
                }
                )
                }
            </div>
        </div>
    )
}

export { FilterableCategoryRow };