import React from 'react';
import { FilterableCategoryRow } from './ProductCategoryRow';

function mapData(data) {
    let categories = []
    let accumulator = [];
    let children = [];
    data.forEach((item) => {
        if (!categories.includes(item.category)) {
            children = [];
            data.forEach(innerItem => {
                if (innerItem.category === item.category) {
                    children.push(innerItem);
                }
            })
            accumulator.push({
                    name: item.category,
                    productRows: children,
                }
            );
            categories.push(item.category);
        }
    })
    return accumulator;
}

function ProductTable(props) {
    const searchValue = props.searchValue;
    const onlyShowProductsInStock = props.onlyShowProductsInStock;

    const mappedData = mapData(props.data);
    const renderableData = mappedData.map(categoryObject => {

        categoryObject.productRows = categoryObject.productRows.filter(productRow => {
            return (searchValue === '' || productRow.name.includes(searchValue))
        });

        categoryObject.productRows = categoryObject.productRows.filter(productRow => {
            return (onlyShowProductsInStock === false || productRow.stocked === true)
        });

        return (
            <FilterableCategoryRow
                key={categoryObject.name}
                name={categoryObject.name}
                productRows={categoryObject.productRows}
            />
        )
    })

    return (
        <div>
            <div className="m-3">
                <div className="container">
                    <div className="row">
                        <h3 className="col">Name</h3>
                        <h3 className="col">Price</h3>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column m-3">
                {renderableData}
            </div>
        </div>

        
    )
}

export { ProductTable };