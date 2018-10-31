import ErrorBoundary from './ErrorBoundary';

const ComponentThatThrows = () => {
  throw new Error({ message: 'Error' });
};

it('catches error and displays message', () => {
  swallowErrors(() => {
    const wrapper = mount(
      <ErrorBoundary render={() => <h3>Ooops</h3>}>
        <ComponentThatThrows />
      </ErrorBoundary>,
    );

    const text = wrapper.text();

    expect(text).toEqual('Ooops');
  });
});
