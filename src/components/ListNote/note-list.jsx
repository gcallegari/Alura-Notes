import React, { Component } from 'react';
import CardNote from '../CardNote';
import "./styles.css"

class ListNote extends Component {

    render() {
        return (
            <ul className="note-list">
                {this.props.notes.map((notes, index) => {
                    return (
                        <li className="note-list-item" key={index}>
                            <CardNote
                                indice={index}
                                excludeNote={this.props.excludeNote}
                                title={notes.title}
                                text={notes.text}
                                category={notes.category} />
                        </li>
                    );
                })}
            </ul>
        )
    }
}

export default ListNote;