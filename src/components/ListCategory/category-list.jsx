import React, { Component } from 'react';
import "./styles.css";

class ListCategory extends Component {

    constructor() {
        super();
        this.state = { categories: [] }
        this._newCategories = this._newCategories.bind(this);
    }
    componentDidMount() {
        this.props.categories.subscribe(this._newCategories);
    }

    componentWillUnmount() {
        this.props.categories.unsubscribe(this._newCategories);
    }

    _newCategories(categories) {
        this.setState({ ...this.state, categories })
    }
    _handleEventInput(e) {
        if (e.key === "Enter") {
            let valueCategory = e.target.value;
            this.props.addCategory(valueCategory);
        }
    }
    render() {
        return (
            <section className="category-list">
                <ul className="category-list-list">
                    {this.state.categories.map((category, index) => {
                        return (
                            <li key={index} className="category-list-item">
                                {category}
                            </li>
                        );
                    })}

                </ul>
                <input
                    type="text"
                    className="category-list-input"
                    placeholder="Add Category"
                    onKeyUp={this._handleEventInput.bind(this)} />
            </section>
        );
    }
}

export default ListCategory;