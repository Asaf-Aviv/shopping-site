import { connect } from 'react-redux';
import Products from './Products';
import { fetchProducts } from '../../actions/productActions';

const mapStateToProps = state => ({
  products: state.store.products,
});

export default connect(mapStateToProps, { fetchProducts })(Products);
