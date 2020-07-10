import React from 'react'
import ReactDOM from 'react-dom'

const people = [
  { name: 'Daniel' },
  { name: 'Steven' },
  { name: 'Alyssa' }
];

const element = React.createElement('ol', {
  className: 'welcome-message'
}, 
  people.map( person => (
    // If you are mapping over an array using map then
    // each element needs its own key prop
    React.createElement('li', { key: person.name}, person.name)
  ))
)

ReactDOM.render(
  element,
  document.getElementById('root')
)

