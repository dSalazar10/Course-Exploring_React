import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContacts'

class App extends Component {
  // Hard coded data
  state = {
    contacts: [],
    screen: 'list'
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
      <div>
        { // Display ListContacts Page
        this.state.screen === 'list' && (
          <ListContacts // Props
          contacts = {this.state.contacts}
          onDeleteContact={this.removeContact}
          onNavigate={() => {
            // When Add Contacts is clicked
            this.setState(() => ({
              // screen is updated to create
              screen: 'create'
            }))
          }}/>
        )}
        { // Display CreateContent Page
        this.state.screen === 'create' && (
          <CreateContact />
        )}
      </div>
    )
  }
}



export default App;
