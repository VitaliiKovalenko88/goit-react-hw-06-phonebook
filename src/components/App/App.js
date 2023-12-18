import { useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorag';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');



  const generateId = () => nanoid()

  const addContact = (name, number) => {
    const dataContacts = {
      id: generateId(),
      name,
      number,
    };

    const searchSameContact = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (searchSameContact) {
      alert(`"${name}" вже є в вашому списку`);
      return;
    }

    setContacts(prevContacts =>
      [dataContacts, ...prevContacts]
    );
  };

  const onChangeFilter = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId),
    );
  };

  const visibleContacts = getVisibleContacts();

  return <div className={css.container}>
    <h2>PhoneBook</h2>
    <ContactForm onSubmit={addContact} />
    <h2>Contacts</h2>
    <Filter
      filter={filter}
      onChangeFilter={onChangeFilter}
    />
    <ContactList
      contacts={visibleContacts}
      onDeleteContact={deleteContact}
    />
  </div>

};






export default App;