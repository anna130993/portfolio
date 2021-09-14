import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createTheme, StylesProvider, ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Homepage/Homepage';
import About from './components/features/About/About';
import Projects from './components/features/Projects/Projects';
import Contact from './components/features/Contact/Contact';

const theme = createTheme({
  palette: {
    common: { white: '#dcdde1', black: '#2d3436'},
    secondary: { main: '#262542', contrastText: '#dfe6e9'},
    primary: { main: '#7f8fa6'},
    info: { main: '#c8d6e5'},
    success: { main: '#78e08f'},
    background: { paper: '#c8d6e5', default: '#857d87' },
  },
});

const App = () => (
  <BrowserRouter>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about-me' exact component={About} />
            <Route path='/projects' exact component={Projects} />
            <Route path='/contact' exact component={Contact} />
          </Switch>
        </MainLayout>
      </ThemeProvider>
    </StylesProvider>
  </BrowserRouter>
);

export default App;
