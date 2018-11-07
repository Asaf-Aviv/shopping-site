import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { fetchProductsByName, resetSearchBar } from '../../actions/searchBarActions';

const mapDispatchToProps = {
  fetchProductsByName,
  resetSearchBar,
};

export default connect(null, mapDispatchToProps)(SearchBar);
