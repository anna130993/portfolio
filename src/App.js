import React from 'react';
import {Switch, Route} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Homepage/Homepage';
import About from './components/features/About/About';
import Projects from './components/features/Projects/Projects';
import Contact from './components/features/Contact/Contact';

class App extends React.Component {
  render() {
    return(
      <MainLayout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-me' exact component={About} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      </MainLayout>
    );
  }
}

export default App;
