import PropTypes from 'prop-types';
import { ContactBox } from './Contacts.styled';
import { Contact } from './Contacts.styled';
import { ContactList } from './Contacts.styled';
import { ContactItem } from './Contacts.styled';
import { ContactButton } from './Contacts.styled';

const Contacts = ({ contacts, onDelete }) => {
  if (contacts.length) {
    return (
      <ContactBox>
        <Contact>Contacts</Contact>
        <ContactList>
          {contacts.map(({ id, name, number }) => (
            <ContactItem key={id}>
              <p>
                {name} : {number}
              </p>
              <ContactButton onClick={() => onDelete(id)}>
                Delete contact
              </ContactButton>
            </ContactItem>
          ))}
        </ContactList>
      </ContactBox>
    );
  }
  return;
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
