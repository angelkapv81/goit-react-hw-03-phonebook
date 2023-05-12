import React from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import Form from './Form/Form';
import Search from './Search/Search';
import Contacts from './Contacts/Contacts';
import swal from 'sweetalert';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };
  // перше завантаження
  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (!localData) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  // КОЛИ ОНОВЛЮЄТЬСЯ ДОМ
  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    this.setState({ filter: '' });
    if (
      this.state.contacts.some(
        el => el.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      swal(`Contact ${name} already in phonebook!`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => {
      return {
        contacts: [contact, ...prevState.contacts],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilterChange = event => {
    const filterValue = event.target.value;
    this.setState({ filter: filterValue });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <section>
        <Form onSubmit={this.addContact} />
        <Search
          filterQuery={this.state.filter}
          filter={this.handleFilterChange}
        />
        <Contacts contacts={filteredContacts} onDelete={this.deleteContact} />
        <GlobalStyle />
      </section>
    );
  }
}
export default App;
