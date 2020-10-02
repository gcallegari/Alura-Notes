import React, { Component } from 'react';
import CardNote from '../CardNote';
import "./styles.css"

class ListNote extends Component {

    constructor() {
        super();
        this.state = { notes: [] }
        this._newNotes = this._newNotes.bind(this);
    }
    componentDidMount() {
        this.props.notes.subscribe(this._newNotes);
    }
    componentWillUnmount() {
        this.props.notes.unsubscribe(this._newsNotes);
    }
    _newNotes(notes) {
        this.setState({ ...this.state, notes })
    }

    render() {
        return (
            <ul className="note-list">
                {this.state.notes.map((notes, index) => {
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