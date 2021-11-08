import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
        this.handleShowProductsChange = this.handleShowProductsChange.bind(this);
    }

    handleSearchValueChange(e) {
        this.props.onSearchValueChange(e.target.value);
    }

    handleShowProductsChange(e) {
        this.props.onShowProductsValueChange();
    }

    render() {
        return (
            <div className="d-flex flex-column m-3" id="search-window">
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.searchValue}
                    onChange={this.handleSearchValueChange}>
                </input>

                <div>
                    <input
                        type="checkbox"
                        value={this.props.showProductsValue}
                        onChange={this.handleShowProductsChange}>
                    </input>
                    <label>Show only in-stock</label>
                </div>

            </div>
        )
    }
}

export { SearchBar };