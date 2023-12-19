import { useState } from 'react';
// import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { addContact } from '../../redux/contactsSlice';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const { contacts } = useSelector(({ items }) => items);

  const generateId = () => nanoid();

  const handleChange = e => {
    const { value, name } = e.currentTarget;

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

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      id: generateId(),
      name,
      number,
    };

    const searchSameContact = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (searchSameContact) {
      const notify = () => toast.error(`${name} has been added already`);

      notify();
      return;
    }

    dispatch(addContact(data));

    const notify = () =>
      toast.success(`User, ${name},  has been added to your phone book`);

    notify();

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={css.formContainer} onSubmit={handleSubmit}>
        <label className={css.lbl}>
          Name
          <input
            className={css.inp}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>

        <label className={css.lbl}>
          Number
          <input
            className={css.inp}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            required
          />
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
        <Toaster />
      </form>
    </>
  );
};

export default Form;
