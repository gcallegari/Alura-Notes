import React, { Component } from 'react';
import "./styles.css";
import { ReactComponent as DeleteSVG } from '../../assets/img/delete.svg'

class CardNote extends Component {

    delete() {
        const indice = this.props.indice;
        this.props.excludeNote(indice);

    }
    render() {
        return (
            <section className="card-note">
                <header className="card-note-header">
                    <h3 className="card-note-title">{this.props.title}</h3>
                    <DeleteSVG onClick={this.delete.bind(this)} />
                    <h4>{this.props.category}</h4>
                </header>
                <p className="card-note-text">{this.props.text}</p>
            </section>
        );
    }
}

export default CardNote;