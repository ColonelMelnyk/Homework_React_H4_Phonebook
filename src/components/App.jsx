import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { DataContacts } from './ContactsData';
import { ListFilter } from './ListFilter';
import { Form } from './Form.jsx';
import css from './Form.module.css'
import Notiflix from 'notiflix';
export const App = () => {
   const ContactsByDefault = [
      {
        id: 'id-1',
        name: 'John Miller',
        number: '123-45-67'
      },
      {
        id: 'id-2',
        name: 'Michael Brown',
        number: '987-65-43'
      },
      {
        id: 'id-3',
        name: 'William Smith',
        number: '456-78-90'
      },
      {
        id: 'id-4',
        name: 'Robert Taylor',
        number: '234-56-78'
      },
      {
        id: 'id-5',
        name: 'James Johnson',
        number: '789-01-23'
      }
    ];
    const [contacts, setContacts] = useState(
      () => JSON.parse(localStorage.getItem('contacts')) ?? ContactsByDefault);
    const [filter, setFilter] = useState('');
  
    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);
  
    const filterHandle = e => {
      setFilter(e.target.value);
    };
  
    const onHandlenewContact = (name, number) => {
      const ExistingContact = contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
  
      if (ExistingContact) {
        return  Notiflix.Notify.failure(`${name} Is already listed!`);
      }
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
  
      setContacts(prevState => [...prevState, newContact]);
    };
  
    const onHandleDeletion = id => {
      setContacts(prevContacts =>
        prevContacts.filter(contact => contact.id !== id)
      );
    };
  
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  
    return (
      <div className="app">
        <h2 className= {css.app_title}>Phonebook</h2>
        <Form addContactHandler={onHandlenewContact} />

        <h2 className={css.filter_title}>Contacts</h2>
        <ListFilter
          onFilterChange={filterHandle}
          filter={filter}
        />
        <DataContacts
          contactDel={onHandleDeletion}
          contacts={filteredContacts}
        ></DataContacts>
      </div>
    );
}