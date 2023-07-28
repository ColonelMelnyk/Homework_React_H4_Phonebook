import PropTypes from 'prop-types';
import css from './Form.module.css'
export const ListFilter = ({ filter, onFilterChange }) => {
  return (
      <label className= {css.filter_block}> Find contacts by name
      <input 
       value={filter}
       onChange={onFilterChange}
        type="text"/>
    </label>
  );
};

ListFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};