
// import { useLocalStorage } from 'hooks/useLocalStorag';
// import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

const App = () => {




  // const deleteContact = contactId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== contactId),
  //   );
  // };



  return (
    <div className={css.container}>
      <h2>PhoneBook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>)

};






export default App;