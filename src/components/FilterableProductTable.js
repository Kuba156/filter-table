import React from 'react';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
        this.handleShowProductsChange = this.handleShowProductsChange.bind(this);
        this.state = {
            searchValue: '',
            onlyShowProductsInStock: false,
        };
    }

    handleSearchValueChange(newValue) {
        this.setState({
            searchValue: newValue,
        })
    }

    handleShowProductsChange() {
        this.setState({
            onlyShowProductsInStock: !this.state.onlyShowProductsInStock,
        })
    }

    render() {
        return (
                <div className="card main-window mt-4">
                    <div className="card-body">
                        <div className="card">
                            <div className="text-dark bg-light">
                            <SearchBar
                                searchValue={this.state.searchValue}
                                onSearchValueChange={this.handleSearchValueChange}
                                showProductsValue={this.state.onlyShowProductsInStock}
                                onShowProductsValueChange={this.handleShowProductsChange}
                                />
                            </div>
                        </div>
                        <ProductTable
                            data={this.props.data}
                            searchValue={this.state.searchValue}
                            onlyShowProductsInStock={this.state.onlyShowProductsInStock}
                        />
                    </div>
                </div>
        )
    }
}

export { FilterableProductTable };