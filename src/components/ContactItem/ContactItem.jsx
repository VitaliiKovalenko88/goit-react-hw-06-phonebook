import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  console.log(dispatch(deleteContact(id)));
  return (
    <>
      <p className={css.contactName}>
        {name}: {number}
      </p>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
