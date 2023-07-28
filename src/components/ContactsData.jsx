import css from './Form.module.css'
import PropTypes from 'prop-types';
export const DataContacts = ({ contacts, contactDel }) => {
  return (
    <ul className={css.contacts_list}>
      {contacts.map(contact => (
        <li  key={contact.id}>
          <p>{contact.name}: {contact.number}</p>
          <button type="button" onClick={() => contactDel(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

DataContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  contactDel: PropTypes.func.isRequired,
};