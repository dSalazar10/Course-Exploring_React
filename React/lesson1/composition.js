import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const people = this.props.contacts

    return <ol>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

ReactDOM.render(
    <div className="App">
      <ContactList contacts={[
        { name: 'Daniel' },
        { name: 'Steven' },
        { name: 'Alyssa' }
      ]}/>
      < ContactList contacts={[
        { name: 'Maggie' },
        { name: 'Rolando' }
      ]}/>
    </div>,
    document.getElementById('root')
);
