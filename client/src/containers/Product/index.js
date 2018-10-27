import { connect } from 'react-redux';
import Product from './Product';
import { fetchProduct } from '../../actions/productActions';

const mapStateToProps = state => ({
  product: state.store.chosenProduct.data,
  isFetching: state.store.chosenProduct.isFetching,
  error: state.store.chosenProduct.error,
});

export default connect(mapStateToProps, { fetchProduct })(Product);
