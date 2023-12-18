import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

    onSubmit(name, number);

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
      </form>
    </>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
