import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div className={css.filterContainer}>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={onChangeFilter} />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
