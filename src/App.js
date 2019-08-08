import React from 'react';
import { Provider } from 'react-redux';

import { fetchData } from '@/actions/dataActions';
import HomePage from '@/components/pages/HomePage';

import store from './store';

class App extends React.Component {
  componentDidMount() {
    store.dispatch(fetchData());
  }
  
  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}

export default App;
