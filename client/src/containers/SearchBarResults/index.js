import { memo } from 'react';
import { connect } from 'react-redux';
import SearchBarResults from './SearchBarResults';

const mapStateToProps = state => ({
  products: state.searchBar.products,
  isFetching: state.searchBar.isFetching,
  error: state.searchBar.error,
});

export default memo(connect(mapStateToProps)(SearchBarResults));
