import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css'
export const Form = ({ addContactHandler }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
  
    const onHandleSubmit = e => {
      e.preventDefault();
      addContactHandler(name, number);
      setName('');
      setNumber('');
    };
  
    const onHandleChange = event => {
      const { name, value } = event.target;
  
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'number':
          setNumber(value);
          break;
        default:
          return;
      }
    };
  

    return (
      <form className={css.form} onSubmit={onHandleSubmit}>
        <label >
          <h2>Name</h2>
          <input
          value={name}
          onChange={onHandleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash, and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required   
          />
        </label>
        <label>
          <h2>Number</h2>
          <input
           value={number}
           onChange={onHandleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button} type="submit">Add contact</button>
      </form>
    );
  }


Form.propTypes = {
    addContactHandler: PropTypes.func.isRequired,
};