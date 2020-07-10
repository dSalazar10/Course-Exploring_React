import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class ContactList extends Component {
  render() {
    const people = [
      { name: 'Daniel' },
      { name: 'Steven' },
      { name: 'Alyssa' }
    ];
    
    return <ol>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}


ReactDOM.render(
  <ContactList />,
  document.getElementById('root')
)

