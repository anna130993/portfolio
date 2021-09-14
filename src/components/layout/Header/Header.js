import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';
import MainMenu from '../../features/MainMenu/MainMenu';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.root}>
      <AppBar position='fixed' component='div' color='secondary'>
        <Toolbar className={styles.toolbar}>
          <Link component={RouterLink} to='/' variant='h4' className={styles.title} color='inherit' underline='none'>
            Anna Podsiadło
          </Link>
          <MainMenu />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Header;
