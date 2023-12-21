import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { changeFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onSearchContact = e => {
    const inpValue = e.target.value;
    dispatch(changeFilter(inpValue));
  };

  return (
    <div className={css.filterContainer}>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={onSearchContact} />
    </div>
  );
};

export default Filter;
