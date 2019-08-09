import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { fetchData } from '@/actions/dataActions';
import TopPanel from '@/components/blocks/TopPanel';
import Header from '@/components/blocks/Header';
import Footer from '@/components/blocks/Footer';

import store from '@/store';
import Router from '@/router';
import { theme } from '@/theme';

const muiTheme = createMuiTheme(theme);

class App extends React.Component {
  componentDidMount() {
    store.dispatch(fetchData());
  }

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={muiTheme}>
          <CssBaseline />
          <BrowserRouter>
            <TopPanel />
            <Header />
            <Router />
          </BrowserRouter>
          <Footer />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
