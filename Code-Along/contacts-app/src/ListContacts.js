import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListContacts extends Component {
  /*
  This component renders a form and controls what happens based on user input
  */
  // Specify the data type for input
  static propTypes = {
    // Array
    contacts: PropTypes.array.isRequired,
    // Function
    onDeleteContact: PropTypes.func.isRequired
  }
  // Keep track of the state of the Search Bar input
  // Default to an empty string
  state = {
    query: ''
  }
  
  // Update the text in the Search Bar
  updateQuery = (query => {
    this.setState(() => ({
      query: query.trim()
    }))
  })

  // Clear the Search Bar's text
  clearQuery = (() => (
    this.updateQuery('')
  ))

  // Render the UI
  render() { 
    const { query } = this.state
    const { contacts, onDeleteContact, onNavigate } = this.props
    // If contacts is empty
    const showingContacts = query === ''
      ? contacts // display all contacts
      : contacts.filter( c => (
        // only display contacts with names that contain the query string
        c.name.toLowerCase().includes(query.toLowerCase())
      ))
    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input // Search Bar input field
            className='search-contacts'
            type='text'
            placeholder='Search Contacts'
            value={query}
            onChange={event => this.updateQuery(event.target.value)}>
          </input>
          <a // Change the page from ListContact to CreateContact
            href='#create'
            onClick={onNavigate}
            className='add-contact'>
              Add Contact
          </a>
        </div>
        
        { // Displays a subtitle to clear search bar
        showingContacts.length !== contacts.length && (
          <div className='showing-contacts'>
            <span> Now showing  {showingContacts.length} of {contacts.length} </span>
            <button onClick={this.clearQuery}>Show All</button>
          </div>
        )}

        <ol className='contact-list'>
          { // Diplay each contact
            showingContacts.map( contact => (
              <li key={contact.id} className='contact-list-item'>
            <div // Image
              className='contact-avatar'
              style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}>
            </div>
            <div // Name and Twitter tag
            className='contact-details'>
            <p>{contact.name}</p>
            <p>{contact.handle}</p>
            </div>
            <button // Delete button
              onClick={() => onDeleteContact(contact)}
              className='contact-remove'>
              Remove
            </button>
          </li>
        ))}
        </ol>
      </div>
      
    );
  }
}
// Exporting for use in index.js
export default ListContacts;