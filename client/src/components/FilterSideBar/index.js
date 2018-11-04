import { connect } from 'react-redux';
import FilterSearchBar from './FilterSearchBar';
import { updateFiltersAndProducts, resetFiltersAndFetchProducts } from '../../actions/filterActions';

const mapStateToProps = state => ({
  filters: state.filters,
});

const mapDispatchToProps = {
  updateFiltersAndProducts,
  resetFiltersAndFetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSearchBar);
