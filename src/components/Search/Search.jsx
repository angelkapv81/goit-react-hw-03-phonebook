import PropTypes from 'prop-types';
import { ContactSearch } from './Search.styled';
import { ContactFind } from './Search.styled';

const Search = ({ filterQuery, filter }) => {
  return (
    <div>
      <ContactFind>
        Find contacts
        <ContactSearch
          placeholder="кого шукаємо..."
          type="text"
          name="filter"
          value={filterQuery}
          onChange={filter}
        />
      </ContactFind>
    </div>
  );
};

Search.propTypes = {
  filterQuery: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
};

export default Search;
