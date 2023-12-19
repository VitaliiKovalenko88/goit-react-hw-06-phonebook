// import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import styles from '../ContactItem/ContactItem.module.css';
import { useSelector } from 'react-redux';
const ContactList = () => {
  const { contacts } = useSelector(({ items }) => items);
  const filter = useSelector(({ filter }) => filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.listContainer}>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li className={styles.contactItem} key={id}>
            <ContactItem id={id} name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
