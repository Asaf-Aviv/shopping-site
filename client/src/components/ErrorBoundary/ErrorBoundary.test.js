import ErrorBoundary from './ErrorBoundary';

const Child = () => {
  throw new Error({ message: 'Error' });
};

const swallowErrors = (codeToRun) => {
  const { error } = console;
  console.error = () => {};

  codeToRun();

  console.error = error;
};

it('catches error and displays message', () => {
  swallowErrors(() => {
    const wrapper = mount(
      <ErrorBoundary render={() => <h3>Ooops</h3>}>
        <Child />
      </ErrorBoundary>,
    );

    const text = wrapper.text();

    expect(text).toEqual('Ooops');
  });
});
