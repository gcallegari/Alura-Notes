import React, { Component } from 'react';
import "./styles.css";

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.title = "";
        this.text = "";
        this.category = "No categories yet";
        this.state = { categories: [] }

        this._newCategories = this._newCategories.bind(this);
    }

    componentWillUnmount() {
        this.props.categories.unsubscribe(this._newCategories);
    }

    _newCategories(categories) {
        this.setState({ ...this.state, categories })
    }

    _handleChangeCategory(event) {
        event.stopPropagation();
        this.category = event.target.value;
    }

    _handleChangeTitle(event) {
        event.stopPropagation();
        this.title = event.target.value;
    }

    _handleChangeText(event) {
        event.stopPropagation();
        this.text = event.target.value;
    }

    _createNote(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title, this.text, this.category);
    }

    render() {
        return (
            <form className="register-form"
                onSubmit={this._createNote.bind(this)}>

                <select
                    onChange={this._handleChangeCategory.bind(this)}
                    className="register-form-input">
                    <option>No categories yet</option>

                    {this.state.categories.map((category, index) => {
                        return <option key={index} > {category}</option>
                    })}
                </select>

                <input
                    type="text"
                    placeholder="Title"
                    className="register-form-input"
                    onChange={this._handleChangeTitle.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Don't forget to..."
                    className="register-form-input"
                    onChange={this._handleChangeText.bind(this)}
                />
                <button className="register-form-input register-form-submit">
                    Pin it!
                </button>
            </form>
        );
    }
}

export default RegisterForm;