import React from 'react'
import ReactDOM from 'react-dom'

const people = [
  { name: 'Daniel' },
  { name: 'Steven' },
  { name: 'Alyssa' }
];

const element = <ol>
  {people.map(person => (
    <li key={person.name}>{person.name}</li>
  ))}
</ol>

ReactDOM.render(
  element,
  document.getElementById('root')
)

