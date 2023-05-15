import PropTypes from 'prop-types';
import { ContactsBlock } from './Form.styled';
import { ContactPhonebook } from './Form.styled';
import { ContactBook } from './Form.styled';
import { ContactForm } from './Form.styled';
import { ContactAdd } from './Form.styled';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    const nameId = nanoid();
    const numberId = nanoid();
    return (
      <ContactsBlock>
        <ContactPhonebook>
          Phonebook
          <BsFillTelephoneFill />
        </ContactPhonebook>
        <ContactBook onSubmit={this.handleSubmit}>
          <label htmlFor={nameId}>Name</label>
          <ContactForm
            placeholder="ім'я"
            id={nameId}
            value={name}
            type="text"
            name="name"
            onChange={this.handleChange}
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label htmlFor={numberId}>Number</label>
          <ContactForm
            placeholder="телефон"
            id={numberId}
            value={number}
            type="tel"
            name="number"
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <ContactAdd type="submit">Add contact</ContactAdd>
        </ContactBook>
      </ContactsBlock>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
