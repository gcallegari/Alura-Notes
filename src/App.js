import React from 'react';
import { Component } from 'react';
import ListNote from './components/ListNote';
import RegisterForm from './components/RegisterForm';
import "./assets/App.css";
import './assets/index.css';
import Categories from './data/Categories';
import ArrayNotes from './data/Notes';
import ListCategory from './components/ListCategory';
class App extends Component {

  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new ArrayNotes();
  }

  render() {
    return (
      <section className="content">
        <RegisterForm
          categories={this.categories}
          createNote={this.notes.addNotes.bind(this.notes)} />

        <main className="main-content">
          <ListCategory
            addCategory={this.categories.addCategory.bind(this.categories)}
            categories={this.categories} />
          <ListNote
            excludeNote={this.notes.deleteNotes.bind(this.notes)}
            notes={this.notes} />
        </main>
      </section>
    );
  }
}

export default App;