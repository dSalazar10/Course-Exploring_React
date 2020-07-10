import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  // Hard coded data
  state = {
    contacts: []
  }

  // Lifecycle Method
  componentDidMount() {
    // Get all the state variables from the
    // backend server's database
    ContactsAPI.getAll()
      .then(contacts => {
        this.setState(() => ({
          contacts
        }))
      })
  }

  // Delete a contact from the list of contacts
  removeContact = (contact => {
    this.setState(currentState => ({
      // Filter out the contact to delete
      contacts: currentState.contacts.filter( c => {
        return c.id !== contact.id
      })
    }))
    ContactsAPI.remove(contact)
  })
  // Render the UI
  render() {
    return (
      <div className="App">
        <ListContacts // Props
          contacts = {this.state.contacts}
          onDeleteContact={this.removeContact}/>
      </div>
    )
  }
}



export default App;
