import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    render: PropTypes.func.isRequired,
  }

  state = {
    hasError: false,
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true,
    });

    if (window.Bugsnag) {
      window.Bugsnag.notify(error);
    }
  }

  render() {
    const { hasError } = this.state;
    const { children, render } = this.props;

    return hasError ? render() : children;
  }
}

export default ErrorBoundary;
